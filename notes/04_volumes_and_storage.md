# Volumes and Storage

Bild zeichnen
Pods erstellen und die default webseite in einem Volume speichern

```bash
# bind mount
docker run -d -p 8080:80 --name webserver1 -v <host_dir>:/usr/share/nginx/html nginx
# show in docker desktop
# show in explorer

# Volume
# Löscht den Inhalt des Volumes nicht
docker volume ls
docker volume create my_volume
docker volume inspect <volume_name>

docker run -d -p 8080:80 --name webserver1 -v my_volume:/usr/share/nginx/html nginx
```
