# GitHub Pages · Einsatzmittel-Finder V0.1

Die Projektdateien sind für GitHub Pages vorbereitet. Noch wurde kein GitHub-Repository angelegt, kein Quellcode hochgeladen und keine Seite veröffentlicht.

## Vor der Demo-Veröffentlichung

GitHub Pages macht die veröffentlichte Website öffentlich erreichbar. Jeder mit dem Link kann die Seite aufrufen und weitergeben. Bei GitHub Free muss das Repository für Pages öffentlich sein. Auf geeigneten bezahlten Tarifen kann das Quell-Repository privat bleiben, während die Pages-Website weiterhin öffentlich ist. Eine Beschränkung auf eine ausgewählte Testgruppe ist mit diesem statischen Pages-Aufbau nicht eingerichtet. Deshalb enthält die App für diese Demo ausschließlich fiktive Beispieldaten.

GitHub Pages wird über ein globales Netz ausgeliefert und bietet hier keinen festgelegten ausschließlichen deutschen Serverstandort. Das eignet sich für die fiktive Präsentationsversion, ist jedoch keine Aussage zur DSGVO-Konformität oder zur Serverstandortbindung einer späteren Anwendung. Vor der finalen Version ist ein Anbieter mit nachweisbarem deutschem Hosting und passendem Auftragsverarbeitungsvertrag auszuwählen.

## GitHub vorbereiten und veröffentlichen

Diese Schritte starten den externen Upload und die Veröffentlichung. Sie wurden noch nicht ausgeführt.

1. In GitHub ein neues Repository namens `Einsatzmittel-Finder` anlegen. Wenn der GitHub-Free-Tarif genutzt wird, das Repository öffentlich anlegen. Bei einem Tarif mit Pages aus privaten Repositories kann das Quell-Repository privat sein, die Website bleibt trotzdem öffentlich. Keine Lizenz-, Template- oder zusätzlichen Beispieldateien automatisch generieren lassen.
2. Im Projektordner prüfen, dass `node_modules/`, `.runtime/`, `dist/`, `Vorschau.png`, `Start.command`, `.env`-Dateien und Zugangsdaten nicht zum Commit vorgemerkt sind. Die bestehende `.gitignore` schließt lokale Laufzeiten, Build-Ausgaben, Vorschau und Geheimnisdateien aus.
3. Die von GitHub angezeigten Befehle zum Commit und Push des Projekts auf den Branch `main` ausführen. Der Projektordner ist aktuell noch kein Git-Repository; diese Einrichtung und der Upload stehen also noch aus.
4. In **Settings → Pages** als Build- und Deployment-Quelle **GitHub Actions** wählen. Der Workflow `.github/workflows/pages.yml` testet die App, erstellt den Build und veröffentlicht den Ordner `dist`.
5. In **Actions** den erfolgreichen Workflow abwarten. Danach erscheint der öffentliche Pages-Link unter **Settings → Pages** bzw. als URL des `github-pages`-Deployments. Im privaten Browserfenster und auf dem iPad testen.

Bei Projektseiten setzt der Workflow Vites Basis-URL automatisch auf `/<repository-name>/`. Für ein persönliches Repository `<account>.github.io` verwendet er `/`. PWA-Manifest, Icons und Service Worker nutzen dieselbe Basis, sodass die Unterpfad-Seite und Offline-Dateien korrekt gefunden werden.

## Technische Konfiguration

- Build mit Node.js 22 und `npm ci`
- `npm test`, dann `npm run build`
- Statische Ausgabe in `dist`
- Workflow-Rechte nur für `contents: read`, `pages: write` und `id-token: write` beim Veröffentlichungsjob
- Keine Zugangsdaten und keine Umgebungsvariablen notwendig
- Website und Ressourcen werden öffentlich über GitHub Pages ausgeliefert; Browserdaten bleiben im Speicher des jeweiligen Testers

Nach der Demo diesen Workflow nicht ungeprüft für produktive Daten weiterverwenden. Für die finale Anwendung getrennte Hosting-, Datenschutz-, Zugriffs- und Synchronisationsanforderungen festlegen.

## Offizielle Hinweise

- [GitHub Pages mit GitHub Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Pages-Quellen und Repository-Tarife](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Vite-Basis-URL](https://vite.dev/guide/static-deploy.html#github-pages)
