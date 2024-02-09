---
title: 8. Wie funktioniert das Image-Building?
sidebar_position: 9
---

## Dockerfile

Docker kann Container-Images erstellen, indem es Anweisungen aus einem sogenannten Dockerfile oder allgemeiner einem Containerfile liest.
Die grundlegende Dokumentation dazu, wie Dockerfiles funktionieren, findest du unter **https://docs.docker.com/engine/reference/builder/**.

## Schreibe dein erstes Dockerfile

Bevor wir unser Python-Image erweitern, werden wir uns generell anschauen, wie man ein Container-Image erstellt.
Dafür erstelle ein neues Verzeichnis mit einem leeren `Dockerfile` darin.

```bash
mkdir myfirstimage
cd myfirstimage
```

Füge den folgenden Inhalt zum Dockerfile mit deinem bevorzugten Editor hinzu:

```Dockerfile title="Dockerfile"
FROM ubuntu
RUN apt-get update && \
    apt-get install -y figlet && \
    apt-get clean
```

* `FROM` gibt das Basis-Image für unseren Build an
* Jede `RUN`-Zeile wird von Docker während des Builds ausgeführt
* Unsere RUN-Befehle müssen nicht-interaktiv sein (keine Eingabe kann während des Builds an Docker bereitgestellt werden)
* Überprüfe **https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/** für weitere Best Practices, wie man Dockerfiles schreibt.

## Baue das Image

Führe einfach aus:

```bash
docker build -t myfirstimage .
```

* `-t` gibt das Tag an, das auf das Image angewendet werden soll
* `.` gibt den Ort des Build-Kontexts an (über den wir später noch mehr sprechen werden, aber im Grunde ist es das Verzeichnis, in dem unser Dockerfile liegt)

:::info Hinweis

Verwende den zusätzlichen Parameter `--build-arg`, wenn du hinter einem Firmenproxy bist:

```bash
docker build -t myfirstimage --build-arg http_proxy=http://<username>:<password>@<proxy>:<port> .
```

:::

Bitte beachte, dass das Tag in den meisten Docker-Befehlen und Anweisungen weggelassen werden kann. In diesem Fall ist das Standard-Tag `latest`. Abgesehen davon, dass es das Standard-Tag ist, hat `latest` nichts Besonderes. Trotz seines Namens identifiziert es nicht notwendigerweise die neueste Version eines Images.
Je nach Build-System kann es auf das zuletzt gepushte Image, auf das zuletzt aus einem Zweig gebaute Image oder auf ein altes Image zeigen. Es kann sogar überhaupt nicht existieren.
Aus diesem Grund solltest du niemals das Tag `latest` in Produktion verwenden, verwende immer eine spezifische Image-Version.
Siehe auch: **https://medium.com/@mccode/the-misunderstood-docker-tag-latest-af3babfd6375**

### Was passiert beim Build des Images

Die Ausgabe des Docker-Builds sieht folgendermaßen aus:

```
Sending build context to Docker daemon  2.048kB
Step 1/2 : FROM ubuntu
 ---> ea4c82dcd15a
Step 2/2 : RUN apt-get update &&     apt-get install -y figlet &&     apt-get clean
 ---> b3c08112fd1c
Successfully built b3c08112fd1c
Successfully tagged myfirstimage:latest
```

### Das Senden des Build-Kontexts an Docker

```
Sending build context to Docker daemon 84.48 kB
...
```

* Der Build-Kontext ist das `.`-Verzeichnis, das an docker build übergeben wurde
* Es wird (als Archiv) vom Docker-Client an den Docker-Daemon gesendet
* Dies ermöglicht es dir, eine Remote-Maschine zum Bauen unter Verwendung lokaler Dateien zu verwenden
* Sei vorsichtig (oder geduldig), wenn dieses Verzeichnis groß ist und deine Verbindung langsam ist

### Untersuchung der Ausführungsschritte

```
...
Step 1/2 : FROM ubuntu
 ---> ea4c82dcd15a
Step 2/2 : RUN apt-get update &&     apt-get install -y figlet &&     apt-get clean
 ---> b3c08112fd1c
Successfully built b3c08112fd1c
Successfully tagged myfirstimage:latest
```

* Ein Container (ea4c82dcd15a) wird aus dem Basis-Image erstellt
  * Das Basis-Image wird heruntergeladen, falls es vorher nicht heruntergeladen wurde
* Der `RUN`-Befehl wird in diesem Container ausgeführt
* Der Container wird zu einem Image (b3c08112fd1c) committed
* Der Build-Container (ea4c82dcd15a) wird entfernt
* Das Ergebnis dieses Schritts wird die Basis für den nächsten sein
* ...

### Das Caching-System

Wenn du denselben Build erneut ausführst, wird er sofort abgeschlossen.
Warum?

* Nach jedem Build-Schritt macht Docker ein Snapshot
* Bevor ein Schritt ausgeführt wird, überprüft Docker, ob es dieselbe Sequenz bereits gebaut hat
* Docker verwendet die exakten Strings, die in deinem Dockerfile definiert sind:
  * `RUN apt-get install figlet cowsay` unterscheidet sich von
  * `RUN apt-get install cowsay figlet`
  * `RUN apt-get update` wird nicht erneut ausgeführt, wenn die Spiegel aktualisiert werden
* Alle Schritte nach einem geänderten Schritt werden erneut ausgeführt, da das Dateisystem, auf dem sie basieren, geändert worden sein könnte

Du kannst einen Neubau mit docker build --no-cache ... erzwingen.

Wenn du nur einen teilweisen Neubau auslösen möchtest, z.B. `apt-get update` ausführen, um die neuesten Updates zu installieren, kannst du folgendes Muster verwenden:

```Dockerfile
ENV REFRESHED_AT 2020-03-13
RUN apt-get update
```

Wenn du den Wert von `REFRESHED_AT` aktualisierst, wird der Docker-Build-Cache dieses und aller folgenden Schritte invalidiert, wodurch die neuesten Updates installiert werden.

### Führe es aus

Führe jetzt dein Image aus

```bash
docker run -ti myfirstimage
```

Du findest dich in einer Bash-Shell im Container wieder, führe aus

```bash
figlet hello
```
und du wirst folgende Ausgabe sehen:

```
root@00f0766080ed:/# figlet hello

 _          _ _
| |__   ___| | | ___
| '_ \ / _ \ | |/ _ \
| | | |  __/ | | (_) |
|_| |_|\___|_|_|\___/

root@00f0766080ed:/#
```
Verlasse den Container durch Ausführen von:

```bash
exit
```

## Die CMD-Anweisung im Dockerfile

Mit der `CMD`-Anweisung im Dockerfile können wir den Befehl definieren, der ausgeführt wird, wenn ein Container gestartet wird.

<details>
<summary>
  🤔 Kannst du herausfinden, welche CMD-Anweisung das Ubuntu-Image hat?
</summary>
<p>

Du hast dich in einer Shell befunden, daher muss die Anweisung entweder `/usr/bin/bash` oder `/usr/bin/sh` sein.

</p>
</details>

Modifiziere das zuvor erstellte Dockerfile wie folgt:

```Dockerfile
FROM ubuntu
RUN apt-get update && \
    apt-get install -y figlet && \
    apt-get clean

CMD ["figlet", "hello"]
```

Baue das Image mit:

```bash
docker build -t myfirstimagecmd .
```

:::info Hinweis

Verwende erneut den zusätzlichen Parameter `--build-arg`, wenn du hinter einem Firmenproxy bist:

```bash
docker build -t myfirstimagecmd --build-arg http_proxy=http://<username>:<password>@<proxy>:<port> .
```

:::

Und führe es aus:

```bash
docker run -ti myfirstimagecmd
```

Es führt direkt den definierten Befehl aus und gibt aus

```
 _          _ _
| |__   ___| | | ___
| '_ \ / _ \ | |/ _ \
| | | |  __/ | | (_) |
|_| |_|\___|_|_|\___/

```

Weitere Informationen findest du unter **https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact**.

## Frontend-App-Image bauen

Nachdem wir die Grundlagen des Image-Buildings verstanden haben, möchten wir nun den Quellcode unserer Frontend-App in ein bereits erstelltes Container-Image einbinden. Dazu werden wir ein Dockerfile erstellen.

Das Basis-Image ist unser `php:8-apache`-Image, das wir zuvor verwendet haben. Der `ADD`-Befehl ermöglicht es uns, Dateien aus unserem aktuellen Verzeichnis zum Docker-Image hinzuzufügen.
Wir verwenden diesen Befehl, um den Anwendungsquellcode in das Image einzufügen.

:::info Hinweis

Verwende `.dockerignore`, um Dateien vom Hinzufügen zum Container durch den Docker-Kontext auszuschließen. Es funktioniert genauso wie `.gitignore`: **https://docs.docker.com/engine/reference/builder/#dockerignore-file**

:::

Im Verzeichnis, das das Unterverzeichnis `python-app` enthält, erstelle ein Dockerfile mit dem folgenden Inhalt:

```Dockerfile
FROM python:3.12-slim

# Kopiert den Python-Quellcode an den korrekten Ort
ADD ./python-app/ /app/

# Setzt das Arbeitsverzeichnis
WORKDIR /app

# Installiert Abhängigkeiten
RUN pip install -r requirements.txt

# Startet die Anwendung
CMD ["python", "app.py"]
```

### Baue das python-app-Image

:::info Hinweis

Stoppe und lösche den laufenden `python-app`-Container zuerst. Lasse den Datenbank-Container laufen.

:::

Baue nun das Image:

```bash
docker build -t python-app .
```

### Führe den python-app-Container aus

Nach einem erfolgreichen Build führe ihn aus:

```bash
docker run -d --network container-basics-training --name python-app -p 5000:5000 python-app
```

Öffne nun einen Browser und navigiere zu **http://localhost:5000** (oder in der Webshell verwende `curl http://localhost:5000`).
Du solltest eine Antwort erhalten, die besagt, dass die Verbindung erfolgreich hergestellt wurde.