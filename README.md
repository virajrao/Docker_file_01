Dockerised a node.js application and converted into a docker image which can be pulled easily
and can be used as the docker containers on the different machines.

Commands used for creating a Docker file:
FROM - used for the base image 

RUN - for running the command 

COPY - for copying the  src folder to the docker 

WORKDIR - for marking the present directory 

CMD - It is the last command of the docker file after which the docker file gets started its execution on the local machine 
on which its image instance(docker container) is being created.  
