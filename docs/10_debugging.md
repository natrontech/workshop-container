---
title: 10. Debugging von Containern
sidebar_position: 11
---

# Debugging von Containern

In diesem Kapitel erlernst du effektive Techniken und Werkzeuge, um Probleme in Containern zu diagnostizieren und zu beheben. Wenn ein Container nicht wie erwartet funktioniert, bietet Docker mehrere Befehle zur Fehlersuche, mit denen du Informationen sammeln und die Ursache des Problems ermitteln kannst.

## Docker-Systeminformationen

Um einen umfassenden Überblick über den Zustand und die Konfiguration deiner Docker-Installation zu erhalten, kannst du den Befehl `docker info` verwenden. Dies liefert detaillierte Informationen über die Anzahl der Container, Images, die Serverversion, verwendete Treiber und vieles mehr. Ein Beispieloutput könnte so aussehen:

```bash
docker info
```

```plaintext
Containers: 42
 Running: 0
 Paused: 0
 Stopped: 42
Images: 75
Server Version: 18.06.1-ce
...
```

## Container auflisten

Um den aktuellen Status deiner Container zu überprüfen, kannst du verschiedene Varianten des `docker ps` Befehls verwenden:

- **Laufende Container anzeigen:** Der Standardbefehl `docker ps` zeigt alle aktuell laufenden Container an.
  
- **Alle Container anzeigen:** Mit `docker ps -a` erhältst du eine Liste aller Container, einschließlich der gestoppten.
  
- **Den letzten Container anzeigen:** `docker ps -l` zeigt den zuletzt gestarteten Container an.
  
- **Nur IDs laufender Container anzeigen:** Mit `docker ps -q` kannst du schnell die IDs aller laufenden Container abrufen.
  
- **Containergrößen anzeigen:** `docker ps -s` gibt zusätzlich die Größe der Container aus.

:::info Hinweis
`docker container ls` ist ein äquivalenter Befehl zu `docker ps` und kann ebenfalls verwendet werden, um Container zu listen.
:::

## Ressourcennutzung überwachen

- **Speicher- und CPU-Verbrauch:** Der Befehl `docker stats` liefert Echtzeitdaten zum Ressourcenverbrauch aller laufenden Container.
  
- **Speicherverteilung anzeigen:** `docker system df` zeigt die Speichernutzung durch Container, Images und Volumes an.

## Container-Logs

Um Einblicke in die Aktivitäten eines Containers zu erhalten, kannst du die Logs mit `docker logs <container>` abrufen. Dies ist besonders nützlich, um Fehlermeldungen oder andere Ausgaben der Anwendung zu überprüfen.

## Container inspizieren

Für eine detaillierte Ansicht der Konfiguration und des Zustands eines Containers nutze `docker inspect <container>`. Dieser Befehl liefert JSON-formatierte Daten zu Netzwerkeinstellungen, Volumes und vielem mehr.

## In Container eintreten

Um Befehle innerhalb eines laufenden Containers auszuführen oder eine interaktive Shell zu starten, verwende `docker exec -it <container> /bin/bash` (oder `/bin/sh` für leichtgewichtigere Images).

## Prozesse im Container anzeigen

`docker top <container>` zeigt die aktuell im Container laufenden Prozesse an, ähnlich dem `top` Befehl in Unix-basierten Systemen.

## Dateiänderungen verfolgen

Mit `docker diff <container>` kannst du Änderungen an den Dateien im Container seit dessen Start identifizieren. Dies umfasst hinzugefügte, geänderte und gelöschte Dateien.

## Image-Historie

Der Befehl `docker history <image>` gibt Auskunft über die Schichten eines Images und kann helfen zu verstehen, wie ein Image aufgebaut wurde.

## Container-Events

Um eine Chronik von Events, die einen bestimmten Container betreffen, zu sehen, nutze `docker events <container>`. Dies kann bei der Diagnose von Start- oder Netzwerkproblemen hilfreich sein.

Mit diesen Werkzeugen und Techniken bist du gut gerüstet, um die häufigsten Probleme bei der Arbeit mit Docker-Containern zu diagnostizieren und zu beheben.