# Deploy the CS6493 NLP Review Site

This project is a static website. Deploy the `site/` folder as the public root.

## Recommended: Netlify

1. Create a GitHub repository and upload this folder.
2. Go to Netlify and choose **Add new site -> Import an existing project**.
3. Connect the GitHub repository.
4. Netlify will read `netlify.toml` automatically.
5. Use these settings if Netlify asks:
   - Build command: `node site/build-notes-data.mjs`
   - Publish directory: `site`
6. Click **Deploy**.

After deployment, Netlify gives you a public URL like:

```text
https://your-site-name.netlify.app
```

Anyone with that URL can open the same pages.

## Local Preview

Run from the project root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/site/index.html
```

## Important Files

- `site/index.html`: homepage
- `site/module.html`: module detail page
- `site/data.js`: module card data
- `site/notes-data.js`: generated Markdown chapter data
- `site/build-notes-data.mjs`: regenerates `notes-data.js` from Markdown notes
- `netlify.toml`: Netlify deployment config
