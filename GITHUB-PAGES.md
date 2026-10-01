# GitHub Pages · Einsatzmittel-Finder V0.1

Das öffentliche Repository [maxlang15-bit/Einsatzmittelfinder](https://github.com/maxlang15-bit/Einsatzmittelfinder) enthält die geprüften Projektdateien. Der GitHub-Actions-Lauf für Build, Tests und Deployment war erfolgreich. Die V0.1-Demo ist live: [maxlang15-bit.github.io/Einsatzmittelfinder](https://maxlang15-bit.github.io/Einsatzmittelfinder/).

## Vor der Demo-Veröffentlichung

GitHub Pages macht die veröffentlichte Website öffentlich erreichbar. Jeder mit dem Link kann die Seite aufrufen und weitergeben. Bei GitHub Free muss das Repository für Pages öffentlich sein. Auf geeigneten bezahlten Tarifen kann das Quell-Repository privat bleiben, während die Pages-Website weiterhin öffentlich ist. Eine Beschränkung auf eine ausgewählte Testgruppe ist mit diesem statischen Pages-Aufbau nicht eingerichtet. Deshalb enthält die App für diese Demo ausschließlich fiktive Beispieldaten.

GitHub Pages wird über ein globales Netz ausgeliefert und bietet hier keinen festgelegten ausschließlichen deutschen Serverstandort. Das eignet sich für die fiktive Präsentationsversion, ist jedoch keine Aussage zur DSGVO-Konformität oder zur Serverstandortbindung einer späteren Anwendung. Vor der finalen Version ist ein Anbieter mit nachweisbarem deutschem Hosting und passendem Auftragsverarbeitungsvertrag auszuwählen.

## GitHub vorbereiten und veröffentlichen

Der Quellcode wurde mit GitHub Desktop hochgeladen und **GitHub Actions** wurde unter **Settings → Pages** als Veröffentlichungsquelle gewählt. Weitere Commits auf `main` lösen automatisch Tests, Produktionsbuild und Deployment aus.

1. Änderungen in GitHub Desktop committen und auf `main` pushen.
2. In **Actions** prüfen, dass Tests, Build und Pages-Deployment erfolgreich abgeschlossen sind.
3. Die Demo ist unter https://maxlang15-bit.github.io/Einsatzmittelfinder/ erreichbar. Auf dem iPad in Safari über „Teilen → Zum Home-Bildschirm“ hinzufügen; die Offline-Nutzung benötigt einen vollständigen ersten Seitenaufruf.

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
