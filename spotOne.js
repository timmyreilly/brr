Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"occupied","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"markAsOccupied","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"spotOccupancy","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"validSpot","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"spot","type":"bytes32"}],"name":"markAsUnoccupied","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"spotIDList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"inputs":[{"name":"spotIDs","type":"bytes32[]"}],"payable":false,"type":"constructor"}]');
StoringContract = web3.eth.contract(abi); 
contractInstance = StoringContract.at('0x4969232c2eaa6d8cde05b023265cdd61eebfb3f8');
spots = {"one":"firstSpot", "two":"secondSpot","three":"thirdSpot"};
spotsEnum = ['one', 'two', 'three']; 

// what's your account address? 
console.log(acc = web3.eth.accounts[0]); 

function updateSpot(spotID) {
    // spotID = "spotOne";
    contractInstance.markAsOccupied(spotID, {from:web3.eth.accounts[0]}, function() {
        console.log(contractInstance.spotOccupancy.call(spotID)); 
    });

    console.log(contractInstance.address); 
}

function SetSpotOccupied(spotID) {
    contractInstance.markAsOccupied(spotID, {from:web3.eth.accounts[0]}, function(){
        console.log(spotID + "marked occupied"); 
    })
}

function SetSpotUnoccupied(spotID){
    contractInstance.markAsUnoccupied('two', {from:web3.eth.accounts[0]}, function(){
        console.log(spotID, "marked unoccupied"); 
    })
}

function GetSpotOccupancy(spotID){
    var x = contractInstance.spotOccupancy.call(spotID);
    console.log(x); 
    return x; 
}

function adjustAccordingly(spotID, spots, spotsEnum){

    console.log("Welcome");
    var choice = 'c'; 
    
    while(choice != 'q'){
        if (choice == 'p'){
            // place holder, should make switch statement 

            console.log("lets listen in"); 
        }else if (choice == "c"){
            // if the user wants to list the occupancy of all parking meters

            for (var i= 0; i <= 2; i++){
                console.log("Get spot occupance of " + spotsEnum[i] + " is " + GetSpotOccupancy(spotsEnum[i])); 
                // need to get a log of all


                // console.log(spots.spotEnum[i]); 
            }
        } else if(choice == 'one'){
            // user wants to change the occupany of a parking spot - in this case 'one'
        }
    }
    // first we check if the spot is occupied; 
    x = GetSpotOccupancy(spotID);
    
    // then we set it to whatever its not. 
    if(x == 1){

        console.log("Spot is occupied"); 
    }
    else {
        console.log("Spot is unoccupied"); 
    }
}

adjustAccordingly('one', spots, spotsEnum); 


// function voteForCandidate() {
//     candidateName = $("#candidate").val();
//     contractInstance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
//       let div_id = candidates[candidateName];
//       $("#" + div_id).html(contractInstance.totalVotesFor.call(candidateName).toString());
//     });
//   }
  