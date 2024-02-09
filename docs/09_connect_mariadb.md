---
title: 9. MariaDB-Container verbinden
sidebar_position: 10
---

In diesem Lab erweitern wir unsere Python-Webanwendung, sodass sie auf eine MariaDB-Instanz zugreifen und Daten lesen kann. Dies ermöglicht es uns, dynamische Inhalte in unserer Flask-App anzuzeigen, die aus der Datenbank abgerufen werden.

## Vorbereitung der MariaDB-Instanz

Bevor wir unsere Flask-Anwendung erweitern, müssen wir sicherstellen, dass unser MariaDB-Container läuft und mit Daten gefüllt ist, die wir abfragen können.

### Überprüfung, ob der MariaDB-Container läuft

Lösche den alten MariaDB-Container, falls er noch läuft:

```bash
docker ps
docker stop <container-id>
docker rm <container-id>
```

Starte ihn erneut:

```bash
docker run --name mariadb-container \
            -v volume-mariadb:/var/lib/mysql \
            -e MARIADB_ROOT_PASSWORD=my-secret-pw \
            -d mariadb
```

### Befüllen der MariaDB mit Mock-Daten

Verbinde dich mit der MariaDB-Instanz:

```bash
docker exec -it mariadb-container mariadb -uroot -pmy-secret-pw
```

Erstelle eine einfache Tabelle und füge einige Mock-Daten ein:

```sql
CREATE DATABASE flaskapp;
USE flaskapp;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com'), ('Jane Doe', 'jane.doe@example.com');
```

Verlasse die MariaDB-Shell mit:

```bash
exit;
```

## Erweiterung der Flask-Anwendung

Um die Flask-Anwendung zu erweitern, damit sie auf die MariaDB-Instanz zugreifen kann, benötigen wir einen MySQL-Treiber für Python. Wir werden `PyMySQL` verwenden.

### Aktualisierung der `requirements.txt`

Füge `PyMySQL` zur `requirements.txt` hinzu:

```plaintext title="requirements.txt"
Flask==3.0.2
PyMySQL==1.1.0
```

### Aktualisierung der Flask-Anwendung

Aktualisiere die `app.py`, um eine Verbindung zur MariaDB herzustellen und Daten aus der `users`-Tabelle zu lesen:

```python title="app.py"
from flask import Flask, jsonify
import pymysql.cursors

app = Flask(__name__)

def get_db_connection():
    connection = pymysql.connect(host='mariadb-container',
                                 user='root',
                                 password='my-secret-pw',
                                 database='flaskapp',
                                 cursorclass=pymysql.cursors.DictCursor)
    return connection

@app.route('/')
def users():
    connection = get_db_connection()
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM users")
        users = cursor.fetchall()
    connection.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
```

### Neubau und Neustart des Flask-Containers

Baue das Docker-Image für die Anwendung erneut, um die Änderungen zu übernehmen:

```bash
docker build -t python-flask-app .
```

Stoppe und entferne den alten Flask-Container, falls er noch läuft:

```bash
docker stop python-webapp
docker rm python-webapp
```

Starte den Flask-Container erneut:

```bash
docker run -d -p 5000:5000 --name python-webapp --link mariadb-container:mariadb-container python-flask-app
```

Nun kannst du auf **http://localhost:5000** zugreifen, um die Daten aus der MariaDB-Instanz in deiner Flask-Anwendung angezeigt zu bekommen.
