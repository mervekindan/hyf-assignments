//When will we be there?
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function getRemainingTravelTime(travelInfo) {
    const speedPerMin = travelInfo.speed / 60;
    const remainingTimeInMin = travelInfo.destinationDistance / speedPerMin;
    const hoursDecimal = remainingTimeInMin / 60;
    const hours = Math.floor(hoursDecimal);
    const minutes = Math.ceil(remainingTimeInMin % 60);

    return hours + " hours and " + minutes + " minutes";
}

const travelTime = getRemainingTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
