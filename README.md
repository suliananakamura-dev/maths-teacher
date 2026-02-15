# GitHub Pages Bundle for Marvelous Multiplier

## How to use
1. Upload all files in this folder to the **root** of your GitHub repository.
2. In your repo, go to **Settings → Pages** → set **Source** to *Deploy from a branch* (default branch) and **Folder** to **/** (root).
3. Wait ~30–60 seconds, click the **View site** link, and verify these URLs work:

   - `…/` (site loads)
   - `…/manifest.webmanifest` (JSON)
   - `…/icons/icon-192.png` (image)
   - `…/service-worker.js` (JS)

4. To install the app: In Chrome/Edge, use the **Install** button in the address bar (or menu). On iPad/iPhone (Safari), use **Share → Add to Home Screen**.

### Replace placeholder
- Open **index.html** and replace the placeholder block with the contents of your local file `marvelous_multiplier_formatting_fix_full.html`.
- If your HTML references assets, add them to the repo (e.g., `assets/…`) and keep paths **relative** (e.g., `assets/pic.png`).
