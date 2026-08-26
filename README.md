# Rebuild Likova Website in Next.js

I recreated your previous landing page structure in a Next.js shell and copied the exact legacy DOM from:
`https://likova.space/`.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Notes

- This project uses the original stylesheet and JavaScript from `https://likova.space` so the layout/animation behavior stays close to the live site.
- All page markup is stored in `public/likova-body.html` and injected into `pages/index.js`.
- If you want a fully self-contained build (no external requests), next step is to mirror all `/assets/*` files locally into `public/assets`.
