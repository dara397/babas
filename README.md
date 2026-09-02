# Guardian Towing Services — site

Static site. No build step; open `index.html` in a browser or serve the folder.

## Repository layout

```
/                              repo root (branch: main)
├── index.html                 the live site (copy of "Guardian Towing Site.dc.html")
├── support.js                 runtime the page loads — must sit next to index.html
├── assets/
│   ├── logo.png
│   ├── photo-1.png … photo-7.png
│   └── service-area.png
└── variants/                  alternate color versions, not published
    ├── Guardian Towing Site - Brand Red.dc.html
    ├── Guardian Towing Site - Safety Amber.dc.html
    ├── Guardian Towing Site - Steel Blue.dc.html
    ├── Guardian Towing Site - Cream - Navy.dc.html
    ├── Guardian Towing Site - Cream - Espresso.dc.html
    └── Guardian Towing Site - Cream - Charcoal.dc.html
```

`index.html`, `support.js`, and `assets/` must keep those relative positions — paths in the
page are relative (`assets/logo.png`, `./support.js`).

## Publishing with GitHub Pages

Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.

## Editing content

Phone `(714) 584-5600` and `guardiantowingservices@gmail.com` appear in the header, hero,
hours block, request form, and footer — update all of them together.

To swap a color version, copy a file from `variants/` over `index.html`.
