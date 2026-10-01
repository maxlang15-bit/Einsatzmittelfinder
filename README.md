# Einsatzmittel-Finder · V0.1

Lokal lauffähiger React-/TypeScript-/Vite-Prototyp für einen organisationsübergreifenden Ressourcenfinder. Alle Organisationen, Entfernungen und technischen Angaben sind fiktive Beispiele. Keine echte Alarmierung, keine Cloud-Datenbank, keine produktiven Benutzer- oder Feuerwehrdaten.

## Auf dem Mac starten

Voraussetzung: Node.js 22.16 oder neuer mit npm.

```sh
npm install
npm run dev
```

Die im Terminal ausgegebene Adresse öffnen (üblicherweise http://127.0.0.1:5173). Der Entwicklungsserver ist absichtlich nur lokal erreichbar.

```sh
npm test
npm run build
npm run preview
```

Die Produktionsvorschau ist üblicherweise unter http://127.0.0.1:4173 erreichbar. Nur der Produktionsbuild registriert den Service Worker. Nach dem ersten vollständigen Online-Aufruf stehen die App-Dateien offline bereit. Änderungen und Favoriten liegen im lokalen Speicher desselben Browsers und derselben Adresse. Entwicklungs- und Vorschau-Port haben getrennte Speicher.

## Funktionen

- Live-Suche in Bezeichnung, Beschreibung, Ressourcengruppen, Einsatzbereichen, Tags und technischen Angaben; Groß-/Kleinschreibung und Akzente werden normalisiert.
- Acht Lage-Einstiege, darunter TH-Unterbereiche und zehn Hochwasser-Ressourcengruppen.
- 24 Ressourcen aus fünf fiktiven Feuerwehren und einem fiktiven THW-Ortsverband; auch nicht kategorisierte Ressourcen sind möglich.
- Filter nach Organisation, fiktiver Entfernung, Transportart und Text in Leistung/Kapazität. Keine automatische Rangfolge nach Entfernung; Katalogreihenfolge bleibt erhalten. Kapazitäten verschiedener Einheiten werden nicht numerisch verglichen.
- Detailansicht mit Foto-Platzhalter und rein informativem Anforderungsweg.
- Lokal gespeicherte Favoriten sowie Verwaltung zum Anlegen, Bearbeiten und Löschen mit Löschbestätigung.
- Responsive Layout, große Bedienelemente, Tastaturfokus und native Dialoge.
- PWA-Manifest mit PNG-Icons und Service Worker für App-Dateien. Keine Datensynchronisation.

## iPad und Installation

Auf einem iPad benötigt eine installierbare PWA eine vom Gerät erreichbare HTTPS-Adresse; die Loopback-Adresse des Mac ist dort nicht erreichbar. Sobald GitHub Pages aktiviert ist, kann die Demo auf dem iPad in Safari über „Teilen → Zum Home-Bildschirm“ hinzugefügt werden. Offline erst nach vollständigem initialem Laden nutzen. Die Testabnahme auf einem echten iPad steht aus.

## Aufbau und spätere Erweiterung

- `src/types.ts`: abstrakte Organisation und Ressource; Organisationstyp bleibt erweiterbar. Kategorien und Einsatzbereiche sind Mehrfachzuordnungen.
- `src/data/catalog.ts`: ausschließlich fiktive Beispieldaten und Lagezuordnungen.
- `src/services/repository.ts`: austauschbarer lokaler Ressourcenadapter. Ein produktiver Adapter sollte asynchron werden und serverseitige Validierung und Konfliktbehandlung ergänzen.
- `src/services/search.ts`: unabhängige Suchlogik mit Tests.
- `src/components/`: wiederverwendbare Karten, native Modaldialoge, Ressourcenansicht und Verwaltung.
- `src/App.tsx`: Navigation, Filter und Zusammenführung der Oberfläche.

Für eine spätere Produktion sind Backend, serverseitige Autorisierung, Authentifizierung, Rechteverwaltung und eine versionierte Offline-Synchronisation eigenständige nächste Schritte. Die Verwaltung ist aktuell für jeden zugänglich, der diesen lokalen Prototyp öffnet. Der angezeigte Datenstand bezeichnet den ursprünglichen Beispieldatensatz; das Bestätigungsdatum wird je Ressource gepflegt.

## Speicher und Grenzen

Die Daten werden pro Browserprofil und Ursprung in `localStorage` gespeichert. Löschen der Website-Daten entfernt Änderungen und Favoriten; beim nächsten Start wird der Beispieldatensatz geladen. Es gibt keine zentrale Sicherung und keinen Datenaustausch zwischen Geräten. Gesperrter oder voller Browserspeicher wird als Fehler angezeigt. Weder Entfernungen noch Ressourcenkarten stellen eine taktische Empfehlung oder Verfügbarkeitszusage dar.

Der übermittelte Auftrag endet bei „Verwaltung – Dort:“. Der Verwaltungsumfang wurde deshalb als lokale Ressourcenpflege (Anlegen/Bearbeiten/Löschen) ausgeführt.

## Start auf diesem vorbereiteten Mac

`Start.command` im Projektordner doppelklicken oder im Terminal `./Start.command` ausführen. Da auf diesem Mac kein Node.js vorhanden war, liegt eine offizielle Node.js-22.16.0-Laufzeit für Apple Silicon lokal unter `.runtime/node`. Sie wird nur verwendet, wenn `node` nicht im Suchpfad liegt, und ist von Git ausgeschlossen. Der Starter zeigt die lokale Adresse im Terminal. Beenden mit Strg+C. Bei Weitergabe des Quellcodes Node.js separat installieren.

## Präsentationsversion mit GitHub Pages

Das öffentliche Repository ist [maxlang15-bit/Einsatzmittelfinder](https://github.com/maxlang15-bit/Einsatzmittelfinder). Der erste GitHub-Actions-Build und die Tests waren erfolgreich, und Pages ist für GitHub Actions aktiviert. Der nächste Workflow-Lauf veröffentlicht die Demo unter https://maxlang15-bit.github.io/Einsatzmittelfinder/. Alle Daten bleiben fiktiv. GitHub Pages stellt Websites öffentlich über ein globales Netz bereit und ist kein festgelegtes Deutschland-Hosting. Details: [GITHUB-PAGES.md](GITHUB-PAGES.md). Die finale Anwendung braucht eine separate Hosting- und Datenschutzprüfung.
