## Shopping List -shopping-app-backend

# Instructions:
 1. git clone danilandau84/hopping-app-backend.git
 2. cd hopping-app-backend
 3. npm install express sequelize tedious body-parse
 4. run command: node server.js"

# Docker Instructions:
1. Build docker image command: docker build -t my-nodejs-app .
2. Run  docker command: docker run -p 4002:4002 my-nodejs-app

## DB Connector: 
Set your Mssql connnection detail in .env file.

## Optional- Run mssql on Docker Container:
1. pull docker command: docker pull mcr.microsoft.com/mssql/server:2019-CU8-ubuntu-20.04
2. Run  docker command: docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong!Passw0rd" -p 1433:1433 --name mssql -d mcr.microsoft.com/mssql/server:2019-latest

    

