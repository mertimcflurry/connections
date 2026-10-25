# Alexas Connections

Custom-Connections im Stil von NYT, Vanilla HTML/JS, läuft direkt auf GitHub Pages.

## Rätsel bearbeiten

1. `puzzle.json` anpassen (ist in `.gitignore`, landet also nicht im öffentlichen Repo).
   - Reihenfolge der Gruppen = Farbe/Schwierigkeit: gelb → grün → blau → lila → orange → türkis.
   - Alle Gruppen brauchen gleich viele Begriffe.
   - Lange Wörter: Trennstelle mit `­` markieren, z. B. `"Nachbar­schaft"`.
   - Bilder im Gewinn-Fenster: Dateien nach `assets/` legen und in `win.images` eintragen, z. B. `["assets/foto1.jpg", "assets/foto2.jpg"]`.
2. `node build.mjs` ausführen → erzeugt `puzzle.data.js` (Lösungen leicht verschleiert).
3. `index.html` im Browser öffnen und testen.

## Veröffentlichen

```bash
git init && git add . && git commit -m "Connections"
git branch -M main
git remote add origin https://github.com/mertimcflurry/connections.git
git push -u origin main
```

Dann im Repo: Settings → Pages → Branch `main`, Ordner `/ (root)`.
