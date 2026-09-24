# simpl-brand

The Simpl Solutions brand guide, served at **brand.simplsolutions.io**. It covers the house system shared by
every Simpl Solutions product (`/`) and a page per product (`/gateway`).

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm tokens         # regenerate app/tokens.css and lib/brand.ts from brand/tokens.json
pnpm tokens:check   # fails if the generated files are stale
```

- **Tokens:** `brand/tokens.json` is the only place a hex value is written. Edit it, run `pnpm tokens`, commit
  all three files.
- **Adding a product page:** add its sections to `app/_components/sections.ts`, create `app/<product>/page.tsx`,
  and add a tab in `components/site-header.tsx`.
- **Marks:** both the Simpl Solutions and Simpl Gateway marks are placeholders drawn in code. No logo files exist
  until they are signed off.
- **Deploy:** every push to `main` builds a static export (`out/`) and publishes it to GitHub Pages via
  `.github/workflows/pages.yml`. The custom domain is set in Settings → Pages.
- **DNS:** `brand.simplsolutions.io` is a CNAME to `ohxhavel.github.io`, managed through the simpl-dns pipeline.
  Request changes in Notion → DNS Change Requests.
