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

# Running an SQL Server
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Password123" -e "MSSQL_PID=Evaluation" -p 1434:1433  --name sqlpreview --hostname sqlpreview -d mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04

```
