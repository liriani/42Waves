# 42Waves - Libft Studio Full

A Vite + React learning dashboard to track progress across Libft functions.

## Project structure

- `src/App.jsx`: main UI
- `src/data/libftData.js`: translations and Libft learning content
- `scripts/validate-data.mjs`: tiny data integrity harness used by `npm test`

## Quick start

```bash
npm install
npm run dev
```

## Checks

```bash
npm test
npm run build
```

## Notes

- Progress is saved in `localStorage` (`libft-studio-progress`).
- Styling is powered by Tailwind CSS.

