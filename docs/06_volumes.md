---
title: 6. Volumes
sidebar_position: 7
---

<details>
<summary>
  🤔 Ich habe einen Container mit einem Datenbankserver laufen. Was passiert mit meinen Daten, wenn ich den Container entferne?
</summary>
<p>

Sie sind weg. Die Docker-Instanz hat keine Persistenzschicht, um Daten dauerhaft zu speichern, lass uns dieses Problem in diesem Kapitel angehen.

</p>
</details>

## Ein Volume in einem Container einbinden

Der MariaDB-Container ist ein gutes Beispiel dafür, warum es gut ist, ein externes Volume zu haben.
Es gibt mehrere Möglichkeiten, wie man mit Volumes in Docker arbeiten kann, in diesem Fall werden wir ein von Docker verwaltetes Volume erstellen, um die persistenten Daten unserer MariaDB zu speichern. Das Volume wird von Docker selbst verwaltet.

Erstelle das von Docker verwaltete Volume mit:

```bash
docker volume create volume-mariadb
```

Nun benutze das erstellte Volume und hänge es an die MariaDB-Datenbank an.

Mit dem Parameter `-v` das Volume an einen Pfad im Container anhängen:

```bash
docker run --name mariadb-container-with-external-volume -v volume-mariadb:/var/lib/mysql -e MARIADB_ROOT_PASSWORD=my-secret-pw -d mariadb
```

Siehe [Dokumentation zu Docker-Volumes](https://docs.docker.com/storage/volumes/) für mehr Informationen.

Okay, nun erstelle einen neuen Benutzer im MariaDB-Container:

```bash
docker exec -it mariadb-container-with-external-volume mariadb -uroot -pmy-secret-pw
```

Im mariadb-Client führe einige SQL-Befehle aus:

```bash
use mysql
CREATE USER 'peter'@'%' IDENTIFIED BY 'venkman';
GRANT SELECT ON * . * TO 'peter'@'%';
```

Sobald alle Schritte abgeschlossen sind, beende die MySQL-Sitzung und verlasse den Container:
```bash
exit;
```

Um zu testen, ob Peter korrekt erstellt wurde, einfach mit seinen Anmeldedaten einloggen.

Nun stoppe und entferne den `mariadb-container-with-external-volume` Container.

```bash
docker stop mariadb-container-with-external-volume
docker rm mariadb-container-with-external-volume
```

Als Nächstes überprüfe, ob die Daten noch verfügbar sind.
Erstelle einen neuen MariaDB-Container mit dem vorherigen Volume:

```bash
docker run --name mariadb-container-with-existing-external-volume \
            -v volume-mariadb:/var/lib/mysql \
            -e MARIADB_ROOT_PASSWORD=my-secret-pw \
            -d mariadb
```

Der Moment der Wahrheit... Verbinde dich mit dem Datenbankserver mit Peters Anmeldedaten:

```bash
docker exec -it mariadb-container-with-existing-external-volume mariadb -upeter -pvenkman
```

Du solltest nun als `peter` mit deiner Datenbankinstanz verbunden sein. Du kannst dies testen, indem du die Benutzer mit dem SQL-Client auflistest:

```bash
SELECT User FROM mysql.user;
```

```
+-----------------+
| USER()          |
+-----------------+
| peter@localhost |
+-----------------+
1 Zeile in Satz (0.00 Sek.)
```
Jetzt verlasse den MySQL-Client

```bash
exit;
```


## Zusätzliche Infos zur Arbeit mit Docker-Volumes

Docker-Volumes können verwendet werden für:

* Entkoppeln der gespeicherten Daten vom Container, der die Daten erstellt hat
* Umgehen des Copy-on-Write-Systems, um native Festplatten-I/O-Leistung zu erzielen
* Umgehen von Copy-on-Write, um einige Dateien aus dem Docker-Commit auszuschliessen
* Teilen eines Verzeichnisses zwischen mehreren Containern
* Teilen eines Verzeichnisses zwischen dem Host und einem Container
* Teilen einer einzelnen Datei zwischen dem Host und einem Container
Eine Alternative zur Arbeit mit Volumes wäre das Einbinden lokaler Verzeichnisse (Host-Ordner) über einen Pfad in deinen Container. Dies werden wir in Kapitel 08 verwenden.


### Docker-Speichertreiber

Wenn du viele Docker-Container auf einer Maschine betreibst, benötigst du normalerweise viel Speicher. Docker-Volumes und Container-Speicher werden auf einem Dateisystem bereitgestellt. Der folgende Link bietet zusätzliche Informationen darüber, wie du das richtige Speichersetup auswählst:

https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html/managing_containers/managing_storage_with_docker_formatted_containers

Derzeit ist `overlay2` der [empfohlene Speichertreiber](https://docs.docker.com/storage/storagedriver/select-storage-driver/#docker-ce).