---
title: 2. Images
sidebar_position: 3
---

# Docker Images

Du kannst nach auf Docker Hub verfügbaren Images suchen, indem du auf den Link "Explore" klickst oder "mariadb" in das Suchfeld eingibst: 
**https://hub.docker.com/search/?q=mariadb&type=image** <br />

Du erhältst eine Liste mit Ergebnissen und der erste Treffer wird wahrscheinlich das offizielle Image sein: **https://hub.docker.com/_/mariadb** <br />

Diese Seite enthält Anweisungen, wie das Image abgerufen werden kann. Lass uns das machen:

```bash
docker pull mariadb
```

:::warning Hinweis

Achte auf Sicherheit! Überprüfe die Images, bevor du sie ausführst.

- Ist es ein [offizielles Image](https://docs.docker.com/docker-hub/official_images/)?
- Was ist in dem Image installiert?
  - Lies das Dockerfile, das zum Erstellen des Images verwendet wurde
  - Überprüfe das Basis-Image

:::


Nachdem ein Image heruntergeladen wurde, kannst du dann einen Container mit dem heruntergeladenen Image mit dem Unterbefehl ﻿run ausführen. Wenn ein Image nicht heruntergeladen wurde, wenn Docker mit dem Unterbefehl ﻿run ausgeführt wird, wird der Docker-Client zuerst das Image herunterladen und dann einen Container damit ausführen:

```bash
docker run mariadb:latest
```

:::info Hinweis

Hier verwenden wir das `latest` Tag, um die neueste Version des Images zu verwenden. Es ist jedoch eine gute Praxis, ein spezifisches Tag zu verwenden, um sicherzustellen, dass du immer die gleiche Version des Images verwendest.

:::

Um die Images zu sehen, die auf deinen Computer heruntergeladen wurden, gib ein:

```bash
docker images
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
mariadb             latest              58730544b81b        2 weeks ago         397MB
hello-world         latest              1815c82652c0        2 months ago        1.84kB
hello-world         linux               1815c82652c0        2 months ago        1.84kB
```

Der Hello-World-Container, den du im vorherigen Lab ausgeführt hast, ist ein Beispiel für einen Container, der läuft und beendet wird, nachdem er eine Testnachricht ausgegeben hat. Container können jedoch viel nützlicher sein und sie können interaktiv sein. Schließlich sind sie ähnlich wie virtuelle Maschinen, nur ressourcenfreundlicher.
Als Beispiel führen wir einen Container mit dem neuesten Image von MariaDB aus. Die Kombination der Schalter `-i` und `-t` gibt dir interaktiven Shell-Zugriff auf den Container:

```bash
docker run -it mariadb:latest
```

:::info Hinweis für Windows

Wenn du git-bash, cmd oder powershell auf einem Windows-System verwendest, achte auf den Fehler:

```
the input device is not a TTY.  If you are using mintty, try prefixing the command with 'winpty'
```

Setze `winpty` am Anfang jedes Befehls, der die `-it` Parameter verwendet. 

Zum Beispiel:

```bash
winpty docker run -it mariadb:latest
```

:::

**Ein Fehler ist aufgetaucht!**

```
2024-02-09 11:44:31+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.2.2+maria~ubu2204 started.
2024-02-09 11:44:31+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2024-02-09 11:44:31+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.2.2+maria~ubu2204 started.
2024-02-09 11:44:31+00:00 [ERROR] [Entrypoint]: Database is uninitialized and password option is not specified
        You need to specify one of MARIADB_ROOT_PASSWORD, MARIADB_ROOT_PASSWORD_HASH, MARIADB_ALLOW_EMPTY_ROOT_PASSWORD and MARIADB_RANDOM_ROOT_PASSWORD
```

<details>
<summary>
  🤔 Warum ist dieser Fehler aufgetreten? Ist es ein Bug im Image?
</summary>
<p>

Alles ist in Ordnung, um dieses Image auszuführen, ist eine gewisse Konfiguration erforderlich. Lies den folgenden Auszug sorgfältig durch.

```
error: database is uninitialized and password option is not specified
        You need to specify one of MARIADB_ROOT_PASSWORD, MARIADB_ALLOW_EMPTY_ROOT_PASSWORD and MARIADB_RANDOM_ROOT_PASSWORD
```

</p>
</details>

<details>
<summary>
  🤔 Was ist ein Image?
</summary>
<p>

Denke an ein Image wie an einen **Bauplan**, der verwendet wird, um Container zu erstellen.
- Ein Image ist eine Sammlung von Dateien + einigen Metadaten (oder in technischen Begriffen: diese Dateien bilden das Root-Dateisystem eines Containers)
- Images bestehen aus Schichten, die konzeptionell übereinander gestapelt sind
- Jede Schicht kann Dateien hinzufügen, verändern oder entfernen
- Images können Schichten teilen, um die Nutzung von Festplattenspeicher, Übertragungszeiten und Speichernutzung zu optimieren
- Du baust diese Images mit Hilfe von **Dockerfiles** (in späteren Labs)
- Images sind unveränderlich, du kannst sie nach der Erstellung nicht ändern

</p>
</details>

<details>
<summary>
  🤔 Was ist der Unterschied zwischen einem Container und einem Image?
</summary>
<p>

Wenn du ein Image ausführst, wird es zu einem Container.
- Ein Image ist ein schreibgeschütztes Dateisystem
- Ein Container ist ein eingekapselter Satz von Prozessen, der in einer schreibbaren Kopie dieses Dateisystems läuft
- `docker run` startet einen Container aus einem gegebenen Image

</p>
</details>