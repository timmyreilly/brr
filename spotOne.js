Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// what's your account address? 
acc = web3.eth.accounts[0]; 

contractInstance = VotingContract.at('0xf5f69a95412daf5c774b2973e3ac31355914c1ed');
spots = {"spotOne":"firstSpot", "spotTwo":"secondSpot","spotThree":"thirdSpot"};

function updateSpot()