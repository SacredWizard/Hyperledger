'use strict';

// const FileSystemCardStore = require('composer-common').FileSystemCardStore
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection

var cardName = 'admin@airlinev1';
const registryId = 'org.acme.airline.aircraft.Aircraft';

// const cardStore = new FileSystemCardStore();
// const cardStoreObj = {cardStore: cardStore};

var cardType = {'type' : 'composer-wallet-filesystem'};

const bnConnection = new BusinessNetworkConnection(cardType);


return bnConnection.connect(cardName).then(function() {
    console.log('Connected')
}).catch((error) => {
    console.error(error);
});

