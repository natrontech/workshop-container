---
title: 5. Container Name
sidebar_position: 6
---

# Benennen von Containern

Im Gegensatz zur `CONTAINER ID` ist der `NAME` etwas, das wir manipulieren können. Der Name ist praktisch, nicht nur zum Starten/Verbinden/Stoppen/Zerstören eines Containers, sondern auch für das Networking (was wir in einem späteren Lab sehen werden).

Um einen Namen zu setzen, füge den Parameter `--name` zum `run` Befehl von Docker hinzu:

```bash
docker run --name mariadb-container -e MARIADB_ROOT_PASSWORD=my-secret-pw -d mariadb
```

Wie immer, um zu überprüfen, ob dies wirklich funktioniert hat, schau dir die Container-Liste an:

```bash
docker ps
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
26f164a65285   mariadb   "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   3306/tcp   mariadb-container
```

Anstatt wie im letzten Lab auf die Datenbank von innerhalb des Containers zuzugreifen, greifen wir von aussen mit einem lokalen mysqlclient darauf zu. Das ist ein bisschen knifflig. Zuerst musst du die IP-Adresse deines Docker-Containers herausfinden. Dafür verwendest du diesen Befehl:
  
```bash
docker inspect mariadb-container  -f '{{ range.NetworkSettings.Networks }}{{ .IPAddress }}{{ end }}'
```
`docker inspect <container>` zeigt dir Details über einen laufenden Container im JSON-Format an (führe es selbst aus und schau es dir an). Wir haben das JSON gefiltert, um nur die IP-Adresse des Containers zu erhalten.

Wir hätten auch den Output mit grep filtern können: `docker inspect mariadb-container | grep IPAddress`, aber unsere Lösung ist eleganter 😊.

Sobald du die IP hast (in deinem Beispiel `172.17.0.2`), verbinde dich damit:
  
```bash
mysql -h172.17.0.2 -uroot -pmy-secret-pw
```

Wenn alles funktioniert, beende den MySQL-Client mit:

```bash
exit;
```

:::info Hinweis für Windows

Der MySQL-Client muss auf deinem Computer installiert sein. Unter Windows kannst du das Binary aus dem ZIP-Archiv verwenden: https://dev.mysql.com/downloads/mysql/.
Auch unter Windows musst du Port-Weiterleitung nutzen, um auf die Datenbank zuzugreifen:

```bash
docker run --name mariadb-container -p 3306:3306 -e MARIADB_ROOT_PASSWORD=my-secret-pw -d mariadb
```

Jetzt solltest du in der Lage sein, auf die Datenbank zuzugreifen mit:

```bash
winpty mysql.exe -hlocalhost -uroot -pmy-secret-pw mariadb
```

:::

<details>
<summary>
  🤔 Kannst du dir einen anderen Weg vorstellen, auf die Datenbank zuzugreifen?
</summary>
<p>

Anstatt den Container mit bash zu betreten, könnten wir auch direkt MySQL innerhalb des Containers ausführen:

```bash
docker exec -it mariadb-container mysql -uroot -pmy-secret-pw
```

</p>
</details>
