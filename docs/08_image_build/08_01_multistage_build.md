---
title: 8.1 Mehrstufiger Build
sidebar_position: 1
---

Multistage Builds in Docker bieten eine effiziente Methode, um leichte und optimierte Container-Images zu erstellen. Durch die Verwendung von Multistage Builds kannst du in einem einzigen Dockerfile verschiedene Build-Phasen definieren, wobei jede Phase ein eigenes Basis-Image verwenden kann. Am Ende kannst du selektiv Artefakte von einer Phase zur nächsten übertragen, was dazu führt, dass das finale Image nur die notwendigen Abhängigkeiten und Artefakte enthält.

## Einführung in Multistage Builds

Das Ziel eines Multistage Builds ist es, die Größe des finalen Images zu minimieren und die Sicherheit zu erhöhen, indem nur die notwendigen Abhängigkeiten und Artefakte im finalen Image enthalten sind. Dies ist besonders nützlich in Sprachen und Umgebungen, in denen der Build-Prozess Abhängigkeiten und Tools benötigt, die zur Laufzeit nicht erforderlich sind.

## Beispiel: Optimierung des Python-App-Images

Angenommen, wir haben eine Python-Webanwendung entwickelt, die wir in einem Docker-Container deployen möchten. Der Build-Prozess für die Anwendung erfordert verschiedene Abhängigkeiten, aber für die Ausführung der Anwendung sind nicht alle Build-Abhängigkeiten notwendig.

### Dockerfile vor der Optimierung

Das ursprüngliche Dockerfile könnte folgendermaßen aussehen:

```Dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY ./python-app/ /app/

RUN pip install -r requirements.txt

CMD ["python", "app.py"]
```

### Dockerfile nach der Optimierung mit Multistage Build

Wir können das Dockerfile optimieren, indem wir einen Multistage Build verwenden:

```Dockerfile title="Dockerfile"
# Build-Stage
FROM python:3.12-slim AS builder

WORKDIR /build

COPY ./python-app/requirements.txt /build/

RUN pip install --target=/build/dependencies -r requirements.txt

# Final-Stage
FROM python:3.12-slim

WORKDIR /app

COPY --from=builder /build/dependencies /usr/local
COPY ./python-app/ /app/

CMD ["python", "app.py"]
```

### Erklärung

1. **Build-Stage**: Diese Stage verwendet das `python:3.12-slim`-Image, um eine Umgebung für den Build-Prozess bereitzustellen. Hier werden die Abhängigkeiten der Anwendung installiert. Durch die Verwendung von `--target=/build/dependencies` werden die Abhängigkeiten in einem separaten Verzeichnis gespeichert, das später im finalen Image verwendet werden kann.
   
2. **Final-Stage**: Diese Stage startet ebenfalls mit dem `python:3.12-slim`-Image, um das finale Image so klein wie möglich zu halten. Hier werden nur die notwendigen Abhängigkeiten aus der Build-Stage kopiert. Anschließend wird der Anwendungscode in das Image kopiert.

### Vorteile

- **Größenreduktion**: Das finale Image enthält nur die für die Ausführung der Anwendung notwendigen Abhängigkeiten und Artefakte, was zu einem kleineren Image führt.
- **Sicherheit**: Weniger Code und weniger Abhängigkeiten im finalen Image bedeuten eine geringere Angriffsfläche für Sicherheitslücken.
- **Effizienz**: Multistage Builds ermöglichen die Wiederverwendung von Zwischenimages, was den Build-Prozess beschleunigen kann, besonders wenn mehrere Builds durchgeführt werden.

### Bau des Images

Um das Image zu bauen, führe einfach den folgenden Befehl aus:

```bash
docker build -t optimierte-python-app .
```

Durch die Anwendung von Multistage Builds kannst du effizientere, sicherere und kleinere Docker-Images erstellen, die speziell auf die Anforderungen Ihrer Anwendung zugeschnitten sind.