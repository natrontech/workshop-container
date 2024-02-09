---
title: 7. Eigener Container bereitstellen
sidebar_position: 7
---

Nachdem wir nun ein Backend haben, wie wäre es, wenn wir einen Frontend-Container für eine Python-Webanwendung bereitstellen und diese mit unserem Backend kommunizieren lassen?

## Eine Python-Webanwendung als Frontend-Container bereitstellen

Zuerst müssen wir das passende Docker-Image finden --> Wo? Genau... auf [**Docker Hub**](https://hub.docker.com).

Verwende das Image `python:3.12-slim` als Basis, um eine einfache Python-Webanwendung mit Flask zu deployen.

```bash
docker pull python:3.12-slim
```

Sobald das Image heruntergeladen wurde, kannst du deine lokalen `docker images` überprüfen:

```bash
docker images
```

Dies zeigt die Images im lokalen Register mit ihrem Namen und Tags an.

Als Nächstes bereiten wir einen einfachen Flask-Webserver vor. Erstelle dafür eine Datei namens `app.py` mit folgendem Inhalt:

```python title="app.py"
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World von Flask!'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

Zusätzlich benötigst du eine `requirements.txt`-Datei für Flask:

```plaintext title="requirements.txt"
Flask==3.0.2
```

Erstelle ein `Dockerfile`, um die App und ihre Abhängigkeiten in ein Image zu packen:

```Dockerfile title="Dockerfile"
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

Baue das Docker-Image für die Anwendung:

```bash
docker build -t python-flask-app .
```

Nun deploye den neuen Container mit dem soeben erstellten Image:

```bash
docker run -d -p 5000:5000 --name python-webapp python-flask-app
```

`docker ps` zeigt alle laufenden Container. Überprüfe, ob `python-webapp` läuft:

```bash
docker ps
```

Nun kannst du versuchen, dich mit dem Server über die zugewiesene Docker-IP-Adresse zu verbinden oder, falls du Portweiterleitung verwendet hast, direkt über **http://localhost:5000**.

Wenn du innerhalb einer Umgebung ohne direkten Browserzugriff arbeitest (z.B. Webshell), kannst du `curl http://localhost:5000` verwenden, um die Seite in deinem Terminal zu öffnen.

:::info Hinweis für Windows und macOS
Wenn du unter Windows oder macOS arbeitest und den Container bereits gestartet hast, solltest du in der Lage sein, direkt über **http://localhost:5000** auf die Webanwendung zuzugreifen, dank der Portweiterleitung, die im `docker run`-Befehl definiert wurde.
:::

Damit hast du erfolgreich einen Frontend-Container mit einer Python-Webanwendung deployt, die auf Flask basiert.

Im nächsten Lab lernst du, wie genau ein Container Image erstellt wird.