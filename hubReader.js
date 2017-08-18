'use strict';

require('dotenv').config();
var EventHubClient = require('azure-event-hubs').Client;

console.log("Hub Connection String: " + process.env.IOT_CONNECTION_STRING);

var connectionString = process.env.IOT_CONNECTION_STRING;

// Configure web3
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


var printError = function (err) {
    console.log(err.message);
};

var printMessage = function (message) {
    console.log('Message received: ');
    console.log(JSON.stringify(message.body));
    console.log('');
};

var client = EventHubClient.fromConnectionString(connectionString);
client.open()
    .then(client.getPartitionIds.bind(client))
    .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
            return client.createReceiver('$Default', partitionId, { 'startAfterTime': Date.now() }).then(function (receiver) {
                console.log('Created partition receiver: ' + partitionId)
                receiver.on('errorReceived', printError);
                receiver.on('message', printMessage);
            });
        });
    })
    .catch(printError);
