# Running a webserver

```bash
# Expose a port
docker run -d -p 8080:80 --name webserver1 nginx

# Example with Windows Containers
docker run -d -p 8000:80 --name my-running-site mcr.microsoft.com/windows/servercore/iis

# Logs anschauen
# Zu vergleichen mit Ereignisanzeige
# Auf Std Out und Std Err
docker logs <container_name>
docker logs -f <container_name>

# Edit the default web page
docker exec -it webserver1 bash
  echo "Hello World" > /usr/share/nginx/html/index.html

# Expose a second webserver
docker run -d -p 8081:80 --name webserver2 httpd

# Networks
docker network ls
docker network inspect bridge
docker network inspect host
```
