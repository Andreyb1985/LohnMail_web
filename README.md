# LohnMail — Landing Page

Одностраничный сайт для LohnMail на **Next.js 15 (App Router) + TypeScript**, без внешних UI-библиотек (чистый CSS с дизайн-токенами из брендбука).

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:3000

## Деплой на Vercel

Вариант 1 — через GitHub:
1. Залей проект в репозиторий GitHub.
2. На https://vercel.com → **Add New Project** → выбери репозиторий.
3. Vercel сам определит Next.js — жми **Deploy**, ничего настраивать не нужно.

Вариант 2 — через CLI:
```bash
npm i -g vercel
vercel
```

## Контактная форма

Форма отправляет POST на `/api/contact` (`app/api/contact/route.ts`). Сейчас там заглушка (лог в консоль + ответ ok). Чтобы получать заявки на почту, подключи один из вариантов:

- **Resend** (рекомендуется на Vercel): `npm i resend`, добавь `RESEND_API_KEY` в Environment Variables на Vercel, раскомментируй пример в `route.ts`.
- **Nodemailer + SMTP** твоего почтового сервера.
- Запись в Google Sheet / CRM.

## Структура

```
app/
  layout.tsx        — шрифты (Inter + Archivo), SEO-метаданные
  globals.css       — дизайн-токены и все стили
  page.tsx          — все 14 секций лендинга
  api/contact/route.ts — endpoint формы
components/
  Header.tsx        — шапка с мобильным меню
  AppMockup.tsx     — мокап desktop-приложения в hero
  ContactForm.tsx   — форма «Testzugang anfragen»
  icons.tsx         — inline SVG-иконки
```

## Дизайн-токены

Все цвета из ТЗ заданы в `:root` в `globals.css`:
`--brand: #008A5B`, `--text: #0F172A`, `--text-secondary: #64748B`,
`--bg: #F6F8FA`, `--card: #FFFFFF`, `--border: #E2E8F0` и т.д.
Поменять брендовый цвет можно в одном месте.
