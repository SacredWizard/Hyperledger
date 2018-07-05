FROM ubuntu:latest

RUN apt-get update && apt-get install -y vim git sudo curl apt-utils software-properties-common && \
    useradd -m wizard && echo "wizard:wizard" | chpasswd && adduser wizard sudo && \
    echo "wizard ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
USER wizard
CMD /bin/bash
WORKDIR /home/wizard

RUN pwd && curl -O https://raw.githubusercontent.com/SacredWizard/Hyperledger/master/fabric/prereqs-ubuntu.sh && \
    chmod u+x prereqs-ubuntu.sh && ./prereqs-ubuntu.sh && . ~/.profile && cp ~/.profile ~/.bash_profile && \
    npm install -g composer-cli composer-rest-server generator-hyperledger-composer yo composer-playground && \
    mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers && \
    curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz && \
    tar -xvf fabric-dev-servers.tar.gz