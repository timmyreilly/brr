Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"occupied","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"markAsOccupied","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"spotOccupancy","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"validSpot","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"markAsUnoccupied","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spotIDList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"spotIDs","type":"bytes32[]"}],"payable":false,"type":"constructor"}]');
StoringContract = web3.eth.contract(abi); 
contractInstance = StoringContract.at('0x4969232c2eaa6d8cde05b023265cdd61eebfb3f8');


// Should work 
idOne = contractInstance.spotOccupancy.call('one');

contractInstance.markAsOccupied('one', {from:web3.eth.accounts[0]});
