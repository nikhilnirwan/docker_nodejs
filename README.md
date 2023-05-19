# build docker image
syntax : docker build . -t <docker-image-name>
docker build . -t node-image

# build docker container and port mapping
syntax : docker run -p <port>:<port> -d --name <container-name> <docker-image-name>
docker run -p 5000:5000 -d --name node-container node-image

# show all docker images 
docker images

# show all docker container 
docker ps , docker ps -a

# stop docker container 
syntax : docker stop <container-ID>
docker stop e3a1fdc5e78f

# start docker container 
syntax : docker start <container-ID>
docker start e3a1fdc5e78f

# remove docker container 
syntax : docker rm <container-ID>
docker rm 67d50e2c4312

# kill docker container 
syntax : docker kill <container-ID>
docker kill c9bf349f5fd6

# remove docker image 
syntax : docker rmi -f <docker-image-ID>
docker rmi -f 8b33e239cde6

# find docker-compose version
docker-compose -v

# enter docker container
syntax : docker exec -it <container-ID> /bin/bash
docker exec -it c8072735ba1d /bin/bash

<root@e3a1fdc5e78f:/app#>
<enter the edit mode of docker then rrturn user "exit" key only> like<root@e3a1fdc5e78f:/app# exit>

# remove all docker images 
docker image prune -a -f
docker image prune

# show docker logs 
syntax : docker logs <container-ID>
docker logs c9bf349f5fd6

# online documentation of docker
https://nodejs.org/en/docs/guides/nodejs-docker-webapp

# mongodb localhost use in docker container use command file name <docker-compose.yml>
sudo docker-compose up -d

# enable docker file mode install depentancieas
apt-get install vim
apt-get install nano

# install pm2 and configur our code
https://pm2.io/docs/runtime/guide/installation/

# mongodb ------------------
# remove mongodb 
sudo apt-get autoremove --purge mongodb

# stop mongodb service 
service mongod stop

# check mongodb service status
service mongod status
sudo systemctl status mongod

# enable or start mongodb 
sudo systemctl enable --now mongod

# check mongodb version 
mongod --version

# mongodb install dockumentation
https://www.fosstechnix.com/how-to-install-mongodb-on-ubuntu-22-04-lts/

# ----------------------------