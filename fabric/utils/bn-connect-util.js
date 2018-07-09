'use strict';

module.exports = {
    BusinessNetworkConnection: require('composer-client').BusinessNetworkConnection,
    cardName: 'admin@airlinev1',
    connection: {},
    connect: function(callback){
        var cardType = {type : 'composer-wallet-filesystem'};
        this.connection = new this.BusinessNetworkConnection(cardType)
        return this.connection.connect(this.cardName).then(()=>{
            callback()
        }).catch((error)=>{
            callback(error);
        });
    },
    disconnect: function(callback){
        this.connection.disconnect();
    },
    ping: function(callback){
        this.connection.ping().then((response)=>{
            callback(responser);
        }).catch((error)=>{
            callback({}, error);
        });
    }
}

/*

Sample Test

$ node
> var d = require('./bn-connect-util.js')
> d
{ BusinessNetworkConnection: [Function: BusinessNetworkConnection],
  cardName: 'admin@airlinev1',
  connection: {},
  connect: [Function: connect],
  disconnect: [Function: disconnect],
  ping: [Function: ping] }
>
> d.connect(function(){console.log('success')})
Promise {
  <pending>,
  domain:
   Domain {
     domain: null,
     _events: { error: [Function: debugDomainError] },
     _eventsCount: 1,
     _maxListeners: undefined,
     members: [] } }
> success

*/