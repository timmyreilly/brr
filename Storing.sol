pragma solidity ^0.4.11; 
// 1 is occupied - 0 is unoccupied 

contract Storing { 
    mapping (bytes32 => uint8) public occupied; 

    bytes32[] public spotIDList;

    function  Storing(bytes32[] spotIDs) {
        spotIDList = spotIDs;
    }

    function spotOccupancy(bytes32 spot) returns (uint8) {
        if (validSpot(spot) == false) throw; 
        return occupied[spot];  
    }


    function markAsOccupied(bytes32 spot) {
        if (validSpot(spot) == false) throw;
        occupied[spot] = 1;  
    }

    function markAsUnoccupied(bytes32 spot){
        if (validSpot(spot) == false) throw; 
        occupied[spot] = 0; 
    }

    function validSpot(bytes32 spot) returns (bool) {
        for(uint i = 0; i < spotIDList.length; i++) {
            if (spotIDList[i] == spot) {
                return true; 
            }
        }
        return false; 
    }
}