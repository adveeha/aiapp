# Adveeha — Portfolio

A simple static portfolio site for a full‑stack web developer.

## Contents
- `index.html` — main page
- `assets/styles.css` — styling
- `assets/script.js` — small JS for the contact form
- `LICENSE` — MIT

## Customize
- Update the avatar image in `index.html` (`<img src="...">`).
- Replace project placeholders.
- Add links for LinkedIn, Twitter, etc. in the header.

## Contact form (Formspree)
This template posts the form to Formspree. Create a free Formspree form at https://formspree.io/ and copy your form ID. Then replace `YOUR_FORM_ID` in `assets/script.js` with your ID:
```
https://formspree.io/f/YOUR_FORM_ID
```

If you don't configure Formspree, the form will show a fallback instructing users to email `adveeha@gmail.com`.

## Publish with GitHub Pages (create repo & push)
1. Create repository on GitHub named `aiapp` (owner: `adveeha`).
2. Locally, in your terminal:
```bash
# create project folder and initialize
mkdir aiapp && cd aiapp
# copy the files provided here into that folder

git init
git add .
git commit -m "Initial portfolio site"

# add your remote (choose SSH or HTTPS)
git remote add origin git@github.com:adveeha/aiapp.git
# or: git remote add origin https://github.com/adveeha/aiapp.git

# push main
git branch -M main
git push -u origin main

# create and push gh-pages branch for Pages
git checkout -b gh-pages
git push -u origin gh-pages
```

3. In GitHub, go to the repository Settings → Pages and set the source to the `gh-pages` branch (root). GitHub will publish at:
```
https://adveeha.github.io/aiapp
```

If you'd rather publish from `main` using `/docs`, move files into a `docs/` folder and choose `main /docs` as the Pages source.

## Quick web upload (if you prefer)
You can also create the repo on github.com and upload files via the web UI (Add file → Upload files), then enable Pages from repository settings.

## Want me to create & publish it for you?
If you re-authorize access for the connection (accept the authorization prompt) I can create the repository `adveeha/aiapp`, push the files and enable Pages so you get the live URL directly. Otherwise follow the steps above and paste the published URL here when ready — I’ll review and suggest improvements.