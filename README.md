# Muse AI Manga — static upgrade

<img width="1271" height="898" alt="Screenshot 2026-11-17 173031" src="https://github.com/user-attachments/assets/b564788d-aedc-4bfe-8807-4af4d238f890" />

A self-contained dark manga discovery and TTS-first static site intended for GitHub Pages or Cloudflare Pages/Workers. No Manus-hosted deployment and no GitHub repository are created by this package.

## Included

- Animated ink-and-halftone background with no orbital visuals.
- Symbol-only SVG favicon and logo mark.
- Local promotional banners, comic panels, logo marks, and an animated GIF texture.
- TTS-first release cards with browser `speechSynthesis` play controls.
- Long audiobook opt-in flow.
- Age-gated payment/subscription/donation page with no floating donation widget.
- Internal `.html` destinations for navigation, buttons, terms, privacy, FAQ, community, latest releases, and payment flows.
- Discord widget placed in a left-aligned community panel instead of centered in the page.

## Deploy

Upload the contents of this folder to GitHub Pages or Cloudflare Pages. The site is static and does not require a build step.

## Payment configuration

The supplied PayPal and Stripe identifiers are included in `pages/support.html` as provided in the request. Verify production credentials and payment-provider policies before launch. The NOWPayments and Buy Me a Coffee links remain external payment destinations.
