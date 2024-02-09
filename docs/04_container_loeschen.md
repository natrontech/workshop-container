---
title: 4. Container löschen
sidebar_position: 5
---

# Container löschen

Es gibt zwei Möglichkeiten einen Container zu löschen.
Wir starten mit dem einfachsten Weg, um einen Container zu löschen.
Zuerst musst du den Namen oder die ID des Containers herausfinden, den du löschen möchtest.

```bash
docker ps
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS      NAMES
26f164a65285   mariadb   "docker-entrypoint.s…"   9 minutes ago   Up 9 minutes   3306/tcp   focused_noether
```

In diesem Beispiel ist der Name des Containers `focused_noether`. Um den Container zu löschen, gib ein:

```bash
docker stop focused_noether
```

Jetzt kannst du überprüfen, ob der Container gestoppt ist, indem du den folgenden Befehl eingibst:

```bash
docker ps -a
```

Die Ausgabe sollte ähnlich wie folgt aussehen:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS      NAMES
26f164a65285   mariadb   "docker-entrypoint.s…"   9 minutes ago   Exited (0) 2 minutes ago             focused_noether
```

Wir haben somit den conteiner "gracefully" gestoppt, aber es gibt auch die Möglichkeit, einen Container "forcefully" zu stoppen. Dazu gibst du den folgenden Befehl ein:

```bash
docker kill focused_noether
```

Wenn der Container gestoppt ist, kannst du ihn löschen, indem du den folgenden Befehl eingibst:

```bash
docker rm focused_noether
```

:::info Hinweis

Es ist eine gute Praxis, Container zu löschen, die nicht mehr benötigt werden, um Speicherplatz freizugeben.

:::

<details>
<summary>
  🤔 Wo kommen diese komischen Namen der Container her?
</summary>
<p>

Docker generiert automatisch Namen für Container, wenn du keinen Namen angibst. Das ist nützlich, wenn du viele Container auf deinem Computer ausführst und nicht jedes Mal einen Namen ausdenken möchtest. Wie du einen Container mit einem Namen erstellst, erfährst du im nächsten Lab.

</p>
</details>
