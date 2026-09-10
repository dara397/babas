# Guardian Towing Services - Website

A fast, static marketing site for Guardian Towing Services (24-hour towing &
roadside assistance, Huntington Beach area).

## How it's built
- Plain static HTML/CSS/JS. No framework, no build step, no runtime.
  The full page content is in the served HTML, so it's fast and crawlable.
- `index.html` - the entire site (inline CSS + a small progressive-enhancement script).
- `assets/` - logo, photos, and the service-area map.
- `variants/` - alternate colour themes (not published).

> Note: `support.js` is left over from the previous build and is no longer used
> by `index.html`. It can be deleted.

## Contact points (keep these in sync if they ever change)
- Phone: (714) 584-5600 - used in `tel:` links throughout.
- Email: guardiantowingservices@gmail.com

## Request form
The "Request a tow" form emails submissions to guardiantowingservices@gmail.com
via FormSubmit (https://formsubmit.co).
One-time step: the first submission triggers an activation email to that inbox -
click the link in it once, then all future submissions arrive automatically.
Submit a test yourself to activate it.

## URLs / domain
Canonical, Open Graph, and JSON-LD URLs point to https://www.guardiantowingservice.com/.
Also mirrored in `robots.txt` and `sitemap.xml` - keep all four in sync if the domain changes.

## Publishing (GitHub Pages)
Settings > Pages > Branch: `main`, Folder: `/ (root)`.

## Still recommended
Images total ~3 MB (the logo alone is ~1 MB). Converting `assets/` to sized WebP
cuts that ~90% - the biggest remaining speed win.
