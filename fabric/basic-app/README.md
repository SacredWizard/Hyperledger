# Hyperledger Fabric Test Application

## Getting started
* This is written by following https://hyperledger.github.io/composer/latest/installing/development-tools
* The node packages are installed in the docker image, Download this docker image and follow its instrcutions in the description and spin up the container https://hub.docker.com/r/sacredwizard/ubuntu-hyperledger-composer/
* Open ports 8080,8081,4200 of container and map those to the local ports
* Install the dev scripts in local 
```
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
```
* Once this is installed, run the start fabric script which will spin up the docker containers
* Now login to the hyperledger composer container and change the user to `rr` (password for this is `rr`)
* Follow the composer documentation for the basic commands 
* In the home directory of user `rr` there is a folder `wiz` whic is a business network application and can be deployed using `composer network start -V 0.0.1 -n wiz -c PeerAdmin@hlfv1 -A a` (The IPs of the other containers can be found using the `docker inspect` command)
* If there is connectivity issue then check if the container is present in `composer_default` network. Try checking the ips in `fabric-dev-servers/fabric-scripts/hlfv11/createPeerAdminCard.sh` and change the ips and regenerate the card using the `createPeerAdminCard.sh` script
* The network application can be started using ` composer network start -V 0.0.1 -n wiz -c PeerAdmin@hlfv1 -A admin -S adminpw`
* Import the admin card using `composer card import -f admin@wiz`
* Once this is successful run the `composer-playground` command and open the browser in local and head to `localhost:8080` 
* The rest server can be started at port 8081 using `composer-rest-server -c admin@wiz -p 8081`
* There is a sample angular app in the home folder, just run `npm start`. The angular application was generated using the `yo hyperledger-composer:angular` and its configured to connect to port 8081. Head to `localhost:4200` to view and perform basic operations through the angular app