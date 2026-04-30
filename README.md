# Grand Misty Heaven — Marketing Site

A premium, mobile-first marketing website for Grand Misty Heaven, a boutique homestay in Madikeri, Coorg. Built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

No backend, no database, no auth. Booking happens via phone call or WhatsApp link.

---

## Run locally

Requirements: Node.js 18.17+ and npm (or pnpm / yarn).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

That's it. No environment variables required.

To build for production locally:

```bash
npm run build
npm start
```

---

## Deploy to Vercel (5 minutes)

1. **Push the code to GitHub.**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/grand-misty-heaven.git
   git push -u origin main
   ```

2. **Go to https://vercel.com** and sign in with GitHub.

3. Click **"Add New Project"** → select the `grand-misty-heaven` repo → click **Deploy**. Vercel auto-detects Next.js. No configuration needed.

4. After ~90 seconds you'll get a live URL like `grand-misty-heaven.vercel.app`.

5. **Custom domain (optional):**
   - Buy a domain from Cloudflare Registrar (cheapest) or Namecheap. Register it in the **hotel owner's name and email**, not yours.
   - In Vercel dashboard: Project → Settings → Domains → add `grandmistyheaven.com`.
   - Vercel shows DNS records to add at the registrar. Add them. SSL is automatic.

---

## File structure

```
grand-misty-heaven/
├── app/
│   ├── globals.css       # Tailwind layer + custom utility classes
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Home page composing all sections
├── components/
│   ├── About.tsx
│   ├── Amenities.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Icons.tsx         # All SVG icons (no external icon lib)
│   ├── Navbar.tsx
│   ├── Reveal.tsx        # Scroll-triggered fade-up animation wrapper
│   ├── RoomCard.tsx
│   └── Rooms.tsx
├── lib/
│   └── data.ts           # Hotel info + rooms (single source of truth)
├── public/               # (favicon goes here)
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## Edit the content

Almost everything you'll want to change lives in **`lib/data.ts`**:

- Hotel name, phone, WhatsApp number, email, address, ratings — top of file
- Rooms (name, price, image URL, features) — `ROOMS` array

Change a room price? Edit `lib/data.ts`, save, push to GitHub. Vercel redeploys automatically in ~60 seconds.

To swap the hero or about-section background images, edit the `HERO_IMAGE` constant at the top of `components/Hero.tsx` (and `ABOUT_IMAGE` in `About.tsx`, `CTA_IMAGE` in `CallToAction.tsx`). For now they point to Unsplash; replace with real hotel photos when available.

### Using your own room photos

Two options:

1. **Easy — host on a CDN.** Upload to Cloudinary (free, 25 GB) or imgur, copy the URL, paste into `lib/data.ts` where the `image:` field is.
2. **Bundled — put in `/public`.** Drop `room-602.jpg` into `public/`, then reference it as `image: '/room-602.jpg'`. Compress to WebP under 200 KB first (use https://squoosh.app).

If you use a CDN domain other than Unsplash, add it to `next.config.js` under `images.remotePatterns`.

---

## Common pitfalls

**`Image with src "..." has invalid src prop`** — You added an image from a domain not whitelisted in `next.config.js`. Add the domain to the `remotePatterns` array.

**`Module not found: @/components/...`** — Make sure `tsconfig.json` has the `paths` config (it does, in this repo). Restart the dev server after any tsconfig change.

**Animations not firing** — `Reveal` is a client component. If you wrap a server component in it from a server file, that's fine; just don't pass non-serializable props.

**Fonts look wrong on first load** — Next's font system is configured with `display: swap`, so you'll briefly see fallback Georgia/system. This is correct — prevents layout shift.

---

## What this site does NOT do (by design)

- No actual bookings — the "Check Availability" / "Book Now" buttons open WhatsApp with a pre-filled message to the hotel
- No payment processing
- No admin panel or CMS
- No availability calendar

If/when the hotel wants real online bookings, that's a v2 project — Razorpay integration, Supabase database, double-booking prevention, KYC. This site is the foundation that makes the next step easier to sell.
