# Richard Sneyd: portfolio

A static portfolio site. No build step, no dependencies.

```
index.html        page content
css/styles.css    all styling; colours are variables at the top
js/main.js        screenshot viewer interactions
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
- **Colours:** change the variables in the first block of `css/styles.css`. Dark mode values are in the same block.
- **Project images:** put screenshots and other project images in `images/projects/`, then reference them from `index.html` with descriptive `alt` text and `loading="lazy"`. Compress large images first (under 300 KB each is a good target).

## Host on GitHub Pages

1. Create a repository and push these files to the `main` branch.
2. Push any change; the workflow in `.github/workflows/deploy.yml` enables GitHub Pages if needed and publishes the site. The URL appears in the workflow run and in Settings → Pages.

The workflow needs the `pages: write` permission to enable Pages automatically. If that is restricted by repository or organization policy, go to **Settings → Pages** and set **Source** to **GitHub Actions** manually.

Prefer no workflow? Delete the `.github` folder and set Pages to deploy from the `main` branch instead.
