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
Um die Website zu nutzen, reicht es die .zip/.7z des letzten Releases herunterzuladen, zu entpacken und die darin enthalten .exe zu starten. Daraufhin öffnet sich die Website automatisch in deinem Browser.

Hast du bereits eine kompatible Java-Version installiert und die Java_Home-Variable konfiguriert, so reicht es die .exe herunterzuladen und auszuführen. Traust du der .exe nicht, so kannst du auch das .jar-File downloaden und manuell aufrufen.

Ist die Website dann geöffnet, so kannst du in der Adressleiste des Browsers deinen Spielstand auswählen. Ändere dazu einfach die Zahl am Ende ab (?savegame=X). Die Zahl entspricht hierbei einem Wert zwischen 1 und 20 und ist direkt an den jeweiligen Savegame-Slot gekoppelt.

## Konfiguration
Du kannst in der config.properties verschiedene Dinge einstellen:
- host: Hier kannst du den Hostnamen einstellen, unter dem die Website dann erreichbar ist. (Default: localhost)
- port: Hier kannst du den Port einstellen, unter dem die Website dann erreichbar ist. (Default: 8080)
- savegameDir: Hier kannst du das Verzeichnis zu den Spielständen einstellen. Bitte beachte, dass du hierfür die \ escapen musst. Aus C:\Users\NAME\Savegames wird also: C:\\Users\\NAME\\Savegames (Default: leer)

## Mitmachen
Pull-Requests sind gerne gesehen. Bei großen Umbauten eröffnet bitte eine Issue um im Vorfeld über die Änderungen zu diskutieren.

Bitte aktualisiert die Tests falls nötig.

Möchtest du Text übersetzen (oder eine neue Sprache hinzufügen), so kannst du das hier gerne machen:  https://weblate.potionlabs.de/projects/agrarmonitor/

Aktueller Status:

[![Übersetzungsstatus](https://weblate.potionlabs.de/widgets/agrarmonitor/-/multi-auto.svg)](https://weblate.potionlabs.de/engage/agrarmonitor/)

## Mod-Support:
Aktuell unterstützt werden die folgenden Mods:
- NF Marsch (v1.4)

## Zukünftige Updates
Für die Zukunft sind die folgenden größeren Updates geplant:
- Echtzeit-Updates: Damit kannst du live zuschauen, wie sich die Zahlen und Daten ändern und Fahrzeuge bewegen
- Server-Unterstützung: Damit du auch sehen kannst, was deine Freunde machen
- Mod-Support: Du darfst gerne Mods vorschlagen (am Besten ein Issue dazu eröffnen), ich werde versuchen diese zu unterstützen
- Darkmode: Komm auf die dunkle Seite!
- Produktionsketten, Tricks & Tipps: Mehr Infos, Mehr Statistiken, Mehr Rechner!

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

If you have already installed a compatible Java version and configured the Java_Home variable, it is sufficient to download and run the .exe. If you don't trust the .exe, you can also download the .jar file and call it up manually.

Once the website is open, you can select your savegame in the browser's address bar. Simply change the number at the end (?savegame=X). The number corresponds to a value between 1 and 20 and is linked directly to the respective savegame slot.

## Configuration
You can set different things in the config.properties:
- host: Here you can set the host name under which the website can then be reached. (Default: localhost)
- port: Here you can set the port under which the website can then be reached. (Default: 8080)
- savegameDir: Here you can set the directory for the saved games. Please note that you have to escape the \ for this to work. So C:\Users\NAME\Savegames becomes: C:\\Users\\NAME\\Savegames (default: empty)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

If you want to translate text (or add new languages) feel free to do so on: https://weblate.potionlabs.de/projects/agrarmonitor/

Current status:

[![translation status](https://weblate.potionlabs.de/widgets/agrarmonitor/-/multi-auto.svg)](https://weblate.potionlabs.de/engage/agrarmonitor/)

## Mod support:
The following mods are currently supported:
- NF Marsch (v1.4)

## Updates
The following major updates are planned for the future:
- Real-time updates: This will allow you to watch live how the numbers and data change and vehicles move
- Server support: So you can see what your friends are doing
- Mod support: You are welcome to suggest mods (preferably per issue), I will try to support them
- Darkmode: Come to the dark side!
- Production chains, tricks & tips: more info, more statistics, more calculators!

## License
The project is licensed under the Apache License, Version 2.0. See LICENSE