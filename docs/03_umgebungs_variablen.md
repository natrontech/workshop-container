---
title: 3. Umgebungsvariablen
sidebar_position: 4
---

# Umgebungsvariablen (Environment Variables)

Warum gab es im vorherigen Lab einen Fehler?
Der MariaDB-Server kann ohne eine ordnungsgemäße Konfiguration nicht ausgeführt werden. Docker kann Variablen über Umgebungsvariablen in den Instantiierungsprozess einfließen lassen.
Umgebungsvariablen werden über den Parameter `-e` übergeben, z.B.:

```bash
docker run -it -e MARIADB_ROOT_PASSWORD=my-secret-pw mariadb
```

Wenn du den Befehl ausführst, wirst du eine Ausgabe wie diese sehen:

```
2024-02-09 11:59:33+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.2.2+maria~ubu2204 started.
2024-02-09 11:59:33+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
2024-02-09 11:59:34+00:00 [Note] [Entrypoint]: Entrypoint script for MariaDB Server 1:11.2.2+maria~ubu2204 started.
2024-02-09 11:59:34+00:00 [Note] [Entrypoint]: Initializing database files


PLEASE REMEMBER TO SET A PASSWORD FOR THE MariaDB root USER !
To do so, start the server, then issue the following command:

'/usr/bin/mariadb-secure-installation'

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the MariaDB Knowledgebase at https://mariadb.com/kb

Please report any problems at https://mariadb.org/jira

The latest information about MariaDB is available at https://mariadb.org/.

Consider joining MariaDB's strong and vibrant community:
https://mariadb.org/get-involved/

2024-02-09 11:59:34+00:00 [Note] [Entrypoint]: Database files initialized
2024-02-09 11:59:34+00:00 [Note] [Entrypoint]: Starting temporary server
2024-02-09 11:59:34+00:00 [Note] [Entrypoint]: Waiting for server startup
2024-02-09 11:59:34 0 [Note] Starting MariaDB 11.2.2-MariaDB-1:11.2.2+maria~ubu2204 source revision 929532a9426d085111c24c63de9c23cc54382259 as process 99
2024-02-09 11:59:34 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
2024-02-09 11:59:34 0 [Note] InnoDB: Number of transaction pools: 1
2024-02-09 11:59:34 0 [Note] InnoDB: Using ARMv8 crc32 + pmull instructions
2024-02-09 11:59:34 0 [Note] mariadbd: O_TMPFILE is not supported on /tmp (disabling future attempts)
2024-02-09 11:59:34 0 [Note] InnoDB: Using liburing
2024-02-09 11:59:34 0 [Note] InnoDB: Initializing buffer pool, total size = 128.000MiB, chunk size = 2.000MiB
2024-02-09 11:59:34 0 [Note] InnoDB: Completed initialization of buffer pool
2024-02-09 11:59:34 0 [Note] InnoDB: File system buffers for log disabled (block size=512 bytes)
2024-02-09 11:59:34 0 [Note] InnoDB: End of log at LSN=46300
2024-02-09 11:59:34 0 [Note] InnoDB: Opened 3 undo tablespaces
2024-02-09 11:59:34 0 [Note] InnoDB: 128 rollback segments in 3 undo tablespaces are active.
2024-02-09 11:59:34 0 [Note] InnoDB: Setting file './ibtmp1' size to 12.000MiB. Physically writing the file full; Please wait ...
2024-02-09 11:59:34 0 [Note] InnoDB: File './ibtmp1' size is now 12.000MiB.
2024-02-09 11:59:34 0 [Note] InnoDB: log sequence number 46300; transaction id 14
2024-02-09 11:59:34 0 [Note] Plugin 'FEEDBACK' is disabled.
2024-02-09 11:59:34 0 [Note] Plugin 'wsrep-provider' is disabled.
2024-02-09 11:59:34 0 [Warning] 'user' entry 'root@1a84e2e51ff2' ignored in --skip-name-resolve mode.
2024-02-09 11:59:34 0 [Warning] 'proxies_priv' entry '@% root@1a84e2e51ff2' ignored in --skip-name-resolve mode.
2024-02-09 11:59:34 0 [Note] mariadbd: Event Scheduler: Loaded 0 events
2024-02-09 11:59:34 0 [Note] mariadbd: ready for connections.
Version: '11.2.2-MariaDB-1:11.2.2+maria~ubu2204'  socket: '/run/mysqld/mysqld.sock'  port: 0  mariadb.org binary distribution
2024-02-09 11:59:35+00:00 [Note] [Entrypoint]: Temporary server started.
2024-02-09 11:59:36+00:00 [Note] [Entrypoint]: Securing system users (equivalent to running mysql_secure_installation)

2024-02-09 11:59:36+00:00 [Note] [Entrypoint]: Stopping temporary server
2024-02-09 11:59:36 0 [Note] mariadbd (initiated by: unknown): Normal shutdown
2024-02-09 11:59:36 0 [Note] InnoDB: FTS optimize thread exiting.
2024-02-09 11:59:36 0 [Note] InnoDB: Starting shutdown...
2024-02-09 11:59:36 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool
2024-02-09 11:59:36 0 [Note] InnoDB: Buffer pool(s) dump completed at 240209 11:59:36
2024-02-09 11:59:36 0 [Note] InnoDB: Removed temporary tablespace data file: "./ibtmp1"
2024-02-09 11:59:36 0 [Note] InnoDB: Shutdown completed; log sequence number 47875; transaction id 15
2024-02-09 11:59:36 0 [Note] mariadbd: Shutdown complete

2024-02-09 11:59:36+00:00 [Note] [Entrypoint]: Temporary server stopped

2024-02-09 11:59:36+00:00 [Note] [Entrypoint]: MariaDB init process done. Ready for start up.

2024-02-09 11:59:36 0 [Note] Starting MariaDB 11.2.2-MariaDB-1:11.2.2+maria~ubu2204 source revision 929532a9426d085111c24c63de9c23cc54382259 as process 1
2024-02-09 11:59:36 0 [Note] InnoDB: Compressed tables use zlib 1.2.11
2024-02-09 11:59:36 0 [Note] InnoDB: Number of transaction pools: 1
2024-02-09 11:59:36 0 [Note] InnoDB: Using ARMv8 crc32 + pmull instructions
2024-02-09 11:59:36 0 [Note] mariadbd: O_TMPFILE is not supported on /tmp (disabling future attempts)
2024-02-09 11:59:36 0 [Note] InnoDB: Using liburing
2024-02-09 11:59:36 0 [Note] InnoDB: Initializing buffer pool, total size = 128.000MiB, chunk size = 2.000MiB
2024-02-09 11:59:36 0 [Note] InnoDB: Completed initialization of buffer pool
2024-02-09 11:59:36 0 [Note] InnoDB: File system buffers for log disabled (block size=512 bytes)
2024-02-09 11:59:36 0 [Note] InnoDB: End of log at LSN=47875
2024-02-09 11:59:36 0 [Note] InnoDB: Opened 3 undo tablespaces
2024-02-09 11:59:36 0 [Note] InnoDB: 128 rollback segments in 3 undo tablespaces are active.
2024-02-09 11:59:36 0 [Note] InnoDB: Setting file './ibtmp1' size to 12.000MiB. Physically writing the file full; Please wait ...
2024-02-09 11:59:36 0 [Note] InnoDB: File './ibtmp1' size is now 12.000MiB.
2024-02-09 11:59:36 0 [Note] InnoDB: log sequence number 47875; transaction id 16
2024-02-09 11:59:36 0 [Note] Plugin 'FEEDBACK' is disabled.
2024-02-09 11:59:36 0 [Note] Plugin 'wsrep-provider' is disabled.
2024-02-09 11:59:36 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
2024-02-09 11:59:36 0 [Note] InnoDB: Buffer pool(s) load completed at 240209 11:59:36
2024-02-09 11:59:36 0 [Note] Server socket created on IP: '0.0.0.0'.
2024-02-09 11:59:36 0 [Note] Server socket created on IP: '::'.
2024-02-09 11:59:36 0 [Note] mariadbd: Event Scheduler: Loaded 0 events
2024-02-09 11:59:36 0 [Note] mariadbd: ready for connections.
```

Wenn du den oben genannten Befehl erneut liest, wirst du bemerken, dass wir die Argumente `-it` (interaktiv/terminal) verwendet haben. Und du hast vielleicht auch herausgefunden, dass mariadb nicht auf das übliche `CTRL-c` reagiert.
Wie verlassen wir also dieses Terminal? Docker hat eine Fluchttastenkombination, um sich von einem Container zu trennen und ihn laufen zu lassen. Dafür musst du `CTRL-p` und dann `CTRL-q` in bash drücken.

:::info Hinweis für Windows

Dies funktioniert möglicherweise nicht unter Windows, da die Tastenkombinationen `STRG-p` und `STRG-q` bereits für andere Zwecke verwendet werden. Verwende `docker ps` in einer separaten Shell, um die Container-ID zu erhalten, und stoppe ihn dann mit `docker stop <container>`. Anschließend musst du den Container mit `docker start <container>` neu starten oder einen neuen Container mit `docker run -d ...` gemäss dem Abschnitt "Abgetrennte Container" starten.

:::

Dies lässt den Container laufen, während du wieder in deiner Shell bist. Um zu überprüfen, ob der Container läuft, verwende den folgenden Befehl:

```bash
docker ps
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
1a84e2e51ff2   mariadb   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   3306/tcp   amazing_mendeleev
```

# Auf den Container zugreifen

Um auf den Container zuzugreifen, verwende den folgenden Befehl:

```bash
docker exec -it <container> bash
```

Wo `<container>` sich auf die `CONTAINER ID` beziehen kann (normalerweise sind die ersten beiden Zeichen ausreichend) oder auf einen der `NAMES` aus der Ausgabe von `docker ps`.
In der obigen Ausgabe wäre dies `7cb31f821233` oder `upbeat_blackwell`.

:::info Hinweis

Der `docker exec` Befehl benötigt entweder die ID oder den NAME des Containers. Zusätzlich braucht er am Ende ein ausführbares Programm.

:::

In diesem Beispiel verwenden wir `bash`, da wir interaktiv etwas im Container ausführen möchten.

Sobald der Befehl ausgeführt wird, solltest du Folgendes sehen:

```
root@1a84e2e51ff2:/#
```

:::info Hinweis

Jedes Mal, wenn du dich mit einem Container verbindest, wirst du immer der Benutzer sein, der in der Dockerfile definiert wurde.

:::

Da wir nun im Container sind können wir herausfinden, ob MariaDB läuft:

```bash
mariadb -uroot -pmy-secret-pw
```

Falls alles korrekt eingerichtet wurde, solltest du eine Ausgabe wie diese sehen:

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 4
Server version: 11.2.2-MariaDB-1:11.2.2+maria~ubu2204 mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

Tippe

```bash
exit;
```

um die Verbindung zu MariaDB zu trennen und

```bash
exit
```

um den Container zu verlassen.

# Detached Containers

Es gibt eine Möglichkeit, Container im Hintergrund laufen zu lassen, ohne dass sie die Shell blockieren. Dafür musst du den Parameter `-d` verwenden, z.B.:

```bash
docker run -d -e MARIADB_ROOT_PASSWORD=my-secret-pw mariadb
```

Wenn du den Befehl ausführst, wirst du eine Ausgabe wie diese sehen:

```
1a84e2e51ff2
```

Das ist die ID des Containers, die du verwenden kannst, um auf den Container zuzugreifen oder ihn zu stoppen.
Wenn du nun alle laufenden Container sehen möchtest, verwende den folgenden Befehl:

```bash
docker ps
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
1a84e2e51ff2   mariadb   "docker-entrypoint.s…"   3 minutes ago   Up 3 minutes   3306/tcp   amazing_mendeleev
```
