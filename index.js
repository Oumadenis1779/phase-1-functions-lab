// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const hqLocation = 42;
    const distance = Math.abs(pickupLocation-hqLocation);
    return distance;
}

function distanceFromHqInFeet(pickupLocation){
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    const distanceFromHqInFeet = blocks * feetPerBlock;
    return distanceFromHqInFeet;
}
function distanceTravelledInFeet(startBlock, endBlock){
    const blocksTravelled = Math.abs(endBlock-startBlock);
    const feetPerBlock = 264;
    const distanceInFeet = blocksTravelled * feetPerBlock;
    return distanceInFeet;
}
function calculatesFarePrice (startBlock, endBlock){
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    const baseFare = 0;
    const perFootRate= 0.02;
    const flatFare= 25;
    if (distanceInFeet <= 400) {
        return baseFare;
}
else if (distanceInFeet <= 2000) {
    const additionalFeet = distanceInFeet - 400;
    return baseFare + additionalFeet * perFootRate;
}
else if (distanceInFeet < 2500) {
    return flatFare;
}
else{
    return 'cannot travel that far';
}
}