import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);

function load(file, globals = {}, imports = {}) {
  const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const exports = {};
  vm.runInNewContext(compiled, {
    exports,
    require: (name) => imports[name] ?? require(name),
    ...globals,
  });
  return exports;
}

test("each platform sends its own event without contact data", () => {
  const calls = [];
  const tracker = load("lib/download-tracking.ts", { window: { gtag: (...args) => calls.push(args) } });
  tracker.trackDownloadClick("windows");
  tracker.trackDownloadClick("macos");
  assert.equal(calls[0][1], "windows_store_click");
  assert.equal(calls[1][1], "macos_download_click");
  assert.equal(new URL(calls[0][2].link_url).searchParams.get("cid"), "lohnmail_website");
  assert.equal(calls[1][2].link_url, "/downloads/LohnMail-macOS.dmg");
  for (const [command, , params] of calls) {
    assert.equal(command, "event");
    assert.deepEqual(Object.keys(params).sort(), ["download_channel", "link_url", "platform", "source", "transport_type"]);
  }
});

test("queues events before gtag loads and preserves the dataLayer", () => {
  const window = { dataLayer: ["existing"] };
  const tracker = load("lib/download-tracking.ts", { window });
  tracker.trackDownloadClick("windows");
  assert.equal(window.dataLayer[0], "existing");
  assert.equal(window.dataLayer[1][0], "event");
  assert.equal(window.dataLayer[1][1], "windows_store_click");
});

test("SSR and analytics failures do not throw", () => {
  assert.doesNotThrow(() => load("lib/download-tracking.ts").trackDownloadClick("windows"));
  const tracker = load("lib/download-tracking.ts", { window: { gtag() { throw new Error("blocked"); } } });
  assert.doesNotThrow(() => tracker.trackDownloadClick("windows"));
});

test("disabled macOS has no link or handler; active links track click and middle-click", () => {
  const calls = [];
  const tracker = load("lib/download-tracking.ts", { window: { gtag: (...args) => calls.push(args) } });
  const Link = load("components/SoftwareDownloadLink.tsx", {}, { "@/lib/download-tracking": tracker }).default;
  const disabled = Link({ platform: "macos", disabled: true, children: "Mac" });
  assert.equal(disabled.type, "div");
  assert.equal(disabled.props["aria-disabled"], "true");
  assert.equal(disabled.props.href, undefined);
  assert.equal(disabled.props.onClick, undefined);
  assert.equal(calls.length, 0);
  const windows = Link({ platform: "windows", children: "Windows" });
  assert.equal(windows.type, "a");
  assert.equal(windows.props.target, "_blank");
  windows.props.onClick();
  windows.props.onAuxClick({ button: 1 });
  windows.props.onAuxClick({ button: 2 });
  assert.equal(calls.length, 2);
  const mac = Link({ platform: "macos", children: "Mac" });
  assert.equal(mac.props.download, true);
  mac.props.onClick();
  assert.equal(calls[2][1], "macos_download_click");
});
