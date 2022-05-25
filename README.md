# AgrarMonitor

[![Übersetzungsstatus](https://weblate.potionlabs.de/widgets/agrarmonitor/-/svg-badge.svg)](https://weblate.potionlabs.de/engage/agrarmonitor/)

---

#### Deutsch

### Was ist der AgrarMonitor?
Der AgrarMonitor ist eine lokal gehostete Website, die dir alle Infos und Statistiken zu deinen LS22-Spielständen anzeigen kann. Du siehst dort beispielsweise den aktuellen Wetterbericht, was du im Lager, bzw. deinen Maschinen hast und wie sich die Marktpreise für deine Früchte verändern.

Screenshots gibts im Ordner "screenshots"

## Kompatibilität
AgrarMonitor ist kompatibel mit der aktuellsten LS22-Version

Ich versuche mit den Updates von LS22 mitzuhalten, aber bitte zögert nicht bei Fehlern oder sonst irgendwelchen Problemen ein Issue aufzumachen!

## Nutzung
Um die Website zu nutzen, reicht es die .zip/.7z des letzten Releases herunterzuladen, zu entpacken und die darin enthaltene .exe zu starten. Daraufhin öffnet sich die Website automatisch in deinem Browser.

Hast du bereits eine kompatible Java-Version installiert und die Java_Home-Variable konfiguriert, so reicht es die .exe herunterzuladen und auszuführen. Traust du der .exe nicht, so kannst du auch das .jar-File downloaden und manuell aufrufen. Was in dem Jar-File genau enthalten ist, siehst du im [AgrarMonitorLauncher-Repository](https://github.com/Zweistein2/AgrarMonitorLauncher)

## Konfiguration
Du kannst in der config.properties verschiedene Dinge einstellen:
- host: Hier kannst du den Hostnamen einstellen, unter dem die Website dann erreichbar ist. (Default: localhost)
- port: Hier kannst du den Port einstellen, unter dem die Website dann erreichbar ist. (Default: 8080)
- savegameDir: Hier kannst du das Verzeichnis zu den Spielständen einstellen. Bitte beachte, dass du hierfür die \ escapen musst. Aus C:\Users\NAME\Savegames wird also: C:\\Users\\NAME\\Savegames (Default: leer)
- language: Hier kannst du die Sprache einstellen, in der die Website angezeigt werden soll. (Default: de)
- savegame: Hier kannst du den Spielstand einstellen, der auf der Website angezeigt werden soll. (Default: 1)

## Mitmachen
Pull-Requests sind gerne gesehen. Bei großen Umbauten eröffnet bitte ein Issue / eine Diskussion um im Vorfeld über die Änderungen zu diskutieren.

Bitte aktualisiert die Tests falls nötig.

Möchtest du Text übersetzen (oder eine neue Sprache hinzufügen), so kannst du das hier gerne machen:  https://weblate.potionlabs.de/projects/agrarmonitor/

Aktueller Status:

[![Übersetzungsstatus](https://weblate.potionlabs.de/widgets/agrarmonitor/-/multi-auto.svg)](https://weblate.potionlabs.de/engage/agrarmonitor/)

## Map-Support:
Aktuell unterstützt werden die folgenden Maps:
- NF Marsch (v1.4)

## Zukünftige Updates
Für die Zukunft sind die folgenden größeren Updates geplant:
- Autodrive/Courseplay-Support: Damit du online deine Tracks sehen und evtl. bearbeiten kannst
- Mod-Support: Du darfst gerne Mods vorschlagen (am Besten ein Issue dazu eröffnen), ich werde versuchen diese zu unterstützen
- Darkmode: Komm auf die dunkle Seite!
- Produktionsketten, Tricks & Tipps: Mehr Infos, Mehr Statistiken, Mehr Rechner!
- Angebote für Gebrauchtfahrzeuge

## Lizenz
Das Projekt wird unter der Apache Lizenz, Version 2.0 lizensiert. Siehe dazu auch LICENSE.

---

#### English

### What is the AgrarMonitor?
The AgrarMonitor is a locally hosted website that can show you all the information and statistics about your LS22 savegames. For example, you can see the current weather report, what you have in stock or in your machines and how the market prices for your fruits are changing.

screenshots can be found in the "screenshots" folder

## Compatibility
AgrarMonitor is compatible with the latest FS22 version

I try to keep up to date with new versions of FS22, but please don't hesitate to open an issue in case you notice something is wrong!

## Usage
To use the website, just download the .zip/.7z of the latest release, unzip it and run the .exe it contains. The website will then open automatically in your browser.

If you have already installed a compatible Java version and configured the Java_Home variable, it is sufficient to download and run the .exe. If you don't trust the .exe, you can also download the .jar file and call it up manually. To see what's in the .jar file, you can look up its content in the [AgrarMonitorLauncher repository](https://github.com/Zweistein2/AgrarMonitorLauncher)

## Configuration
You can set different things in the config.properties:
- host: Here you can set the host name under which the website can then be reached. (Default: localhost)
- port: Here you can set the port under which the website can then be reached. (Default: 8080)
- savegameDir: Here you can set the directory for the saved games. Please note that you have to escape the \ for this to work. So C:\Users\NAME\Savegames becomes: C:\\Users\\NAME\\Savegames (default: empty)
- language: Here you can set the language in which the website should be displayed. (Default: de)
- savegame: Here you can set the savegame which the website should display. (Default: 1)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

If you want to translate text (or add new languages) feel free to do so on: https://weblate.potionlabs.de/projects/agrarmonitor/

Current status:

[![translation status](https://weblate.potionlabs.de/widgets/agrarmonitor/-/multi-auto.svg)](https://weblate.potionlabs.de/engage/agrarmonitor/)

## Map support:
The following maps are currently supported:
- NF Marsch (v1.4)

## Updates
The following major updates are planned for the future:
- Autodrive/Courseplay support: So you can see your tracks online and (maybe) edit them
- Mod support: You are welcome to suggest mods (preferably per issue), I will try to support them
- Darkmode: Come to the dark side!
- Production chains, tricks & tips: more info, more statistics, more calculators!
- Used vehicle offers

## License
The project is licensed under the Apache License, Version 2.0. See LICENSE