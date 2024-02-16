# Eigene Images erstellen

Eigene Images

```bash
# Alle Images anzeigen
docker images

# Image Tags
# Image Layers
# Dockerfile

docker build .
docker build -t my-webserver:0.0.1 .
docker build -t svengerber/my-webserver:0.0.1 .

docker login
docker push svengerber/my-webserver:0.0.1
docker logout

# Multi-Stage Builds
docker build -t hello .
docker run -p 8080:8080 -it hello
```
