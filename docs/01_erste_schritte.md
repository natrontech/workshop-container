---
title: 1. Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Die Kommandozeile

Mit Docker installiert und funktionsfähig, ist jetzt der richtige Zeitpunkt, dich mit der Befehlszeilenanwendung vertraut zu machen. Die Verwendung von Docker besteht darin, mindestens einen Befehl zu verwenden. `docker --help` zeigt die verfügbaren Optionen.

```bash
docker --help
```

```
Usage: docker COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default "/home/user/.docker")
  -D, --debug              Enable debug mode
      --help               Print usage
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level ("debug"|"info"|"warn"|"error"|"fatal") (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default "/home/user/.docker/ca.pem")
      --tlscert string     Path to TLS certificate file (default "/home/user/.docker/cert.pem")
      --tlskey string      Path to TLS key file (default "/home/user/.docker/key.pem")
      --tlsverify          Use TLS and verify the remote
  -v, --version            Print version information and quit

Management Commands:
  config      Manage Docker configs
  container   Manage containers
  image       Manage images
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  secret      Manage Docker secrets
  service     Manage services
  stack       Manage Docker stacks
  swarm       Manage Swarm
  system      Manage Docker
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.
```

Um die für einen spezifischen Befehl verfügbaren Schalter zu sehen, tippe:

```bash
docker <command> --help
```

Um systemweite Informationen über Docker zu sehen, benutze:

```bash
docker info
```

## Hello World (mit Docker)

Docker-Container werden aus Docker-Images ausgeführt. Standardmäßig ziehen sie diese Images von Docker Hub, einer Docker-Registry, die von Docker Inc, dem Unternehmen hinter dem Docker-Projekt, verwaltet wird. Jeder kann seine Docker-Images auf Docker Hub erstellen und hosten, daher findest du für viele Anwendungen und Linux-Distributionen Docker-Images, die auf Docker Hub gehostet werden.

Um zu überprüfen, ob du auf Docker Hub zugreifen und Images herunterladen kannst, tippe:

```bash
docker run hello-world
```

Die Ausgabe, die Folgendes beinhalten sollte, deutet darauf hin, dass Docker korrekt zu funktionieren scheint:

```
Hello from Docker.
This message shows that your installation appears to be working correctly.
...
```

## Dein erster Container 🎉

Mit diesem Befehl haben wir gerade unseren ersten Container auf unserem Computer ausgeführt. Er führte einen einfachen Prozess aus, der eine Nachricht auf der Standardausgabe ausgab, der Container selbst ist jedoch nicht sehr nützlich.

# Docker Dokumentation

Besuche https://docs.docker.com und mache dich mit den Dokumentationen sowie den Referenzen vertraut. In diesem Training verwenden wir Docker CE, daher könnte es auch sinnvoll sein, diesen Abschnitt in der Dokumentation zu überprüfen.

<details>
<summary>Frage: Muss ich den Namen des Docker Images auswendig kennen?</summary>
<p>

Nein! Es gibt Unmengen von **Images**, die von Unternehmen, Open-Source-Projekten und Einzelpersonen bereitgestellt werden. Du kannst diese Images in verschiedenen Registries suchen, einige der bekannteren sind [Docker Hub](https://hub.docker.com) und [Github Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry). Sieh dir das nächste Lab für weitere Details an.

</p>
</details>