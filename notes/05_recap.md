# Recap vom ersten Teil

Pods erstellen und die default webseite anzeigen/bearbeiten

```bash
# Containers
docker ps -a
# Networks
docker network ls
# Volumes
docker volume ls

# Configure a container with env vars
docker run -d -p 8080:8080 kodekloud/webapp-color
docker run -d -p 8080:8080 -e APP_COLOR=green kodekloud/webapp-color
```
