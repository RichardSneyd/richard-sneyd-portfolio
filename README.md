# Richard Sneyd: portfolio

A static portfolio site. No build step, no dependencies.

```
index.html        page content
css/styles.css    all styling; colours are variables at the top
images/           headshot and screenshots
.github/          workflow that deploys to GitHub Pages
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` directly also works.)

## Edit

- **Text:** edit `index.html`. Sections are marked with comments.
- **Placeholders:** the yellow dashed boxes (`class="todo"`) mark content still to be added. Find them all with `grep -n 'class="todo"' index.html`, and delete the whole `<p>` once replaced.
- **Colours:** change the variables in the first block of `css/styles.css`. Dark mode values are in the same block.
- **Screenshots:** put files in `images/screenshots/` and add, inside a case study:
  `<img src="images/screenshots/jellyphonics.png" alt="Describe what the screenshot shows" loading="lazy">`
  Compress images first (under 300 KB each is a good target).

## Host on GitHub Pages

1. Create a repository and push these files to the `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push any change; the workflow in `.github/workflows/deploy.yml` publishes the site. The URL appears in the workflow run and in Settings → Pages.

Prefer no workflow? Delete the `.github` folder and set Pages to deploy from the `main` branch instead.
