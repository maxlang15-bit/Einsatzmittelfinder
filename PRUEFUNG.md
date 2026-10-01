# Prüfung V0.1 und GitHub-Pages-Vorbereitung

## GitHub-Pages-Vorbereitung · 1. Oktober 2026

- Kein GitHub-Repository angelegt; kein Upload und keine Veröffentlichung ausgeführt.
- Keine Änderung an `src/`, `src/data/` oder `src/styles.css`.
- `.github/workflows/pages.yml` erstellt: Node.js 22, `npm ci`, Tests, Produktionsbuild und Deployment des Build-Artefakts auf GitHub Pages.
- Workflow auf `main` und manuell auslösbar; Berechtigungen nur lesender Checkout, Pages-Schreiben und OIDC-Token im Veröffentlichungsjob.
- Vite-Basis-URL wird für Repository-Projektseiten aus `GITHUB_REPOSITORY` ermittelt. Root-Seiten `<owner>.github.io` bekommen `/`.
- HTML-Icons und PWA-Manifest verwenden die Basis-URL, damit Assets und Service Worker auch unter einem Repository-Unterpfad erreichbar sind.
- Kein Backend und keine Zugangsdaten oder Umgebungsvariablen.
- GitHub-Pages-Websites sind öffentlich; weltweite Auslieferung, kein exklusiv deutscher Serverstandort. Nur fiktive Demo-Daten verwenden.
- Quellcode-, Desktop- oder iPad-Browserprüfung auf GitHub Pages ausstehend, bis der Benutzer das Repository selbst anlegt und den Workflow ausführt.

## Lokale Funktionsprüfung

- Drei automatisierte Tests bestanden: Suchbegriffe/Tags, technische Angaben und Datenmodell-Konsistenz.
- Suche „Baum“ findet die leistungsfähige Motorsäge.
- Detaildialog zeigt technische Angaben und den rein informativen Anforderungsweg.
- Lokale Ressourcenverwaltung und erneutes Laden erfolgreich geprüft.
- Responsive Prüfung bei 390, 768 und 1024 Pixeln ohne horizontalen Überlauf.
- Vorbereiteter Vercel-Build ebenfalls erfolgreich gewesen; diese Hosting-Route wird für die Präsentationsphase zugunsten von GitHub Pages nicht verwendet.
