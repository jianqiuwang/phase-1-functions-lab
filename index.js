// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if(block>42){
        return block - 42;
    }else {
        return 42 - block;
    }
}


function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
    if (end>start) {
        return (end-start) * 264
    }else {
        return (start-end) * 264
    }
}

function calculatesFarePrice(start, end) {
    const travelled = distanceTravelledInFeet(start, end)
    const priceAfter_400 = (travelled - 400) * 0.02
    if( travelled<400){
        return 0
    }else if(400<  travelled &&  travelled<=2000) {
        return priceAfter_400
    }else if(2000<travelled && travelled<=2500 ){
        return 25
    }else {
        return 'cannot travel that far'
    }
}