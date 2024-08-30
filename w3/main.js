function determineHouseholdPts(numberInhousehold) {
    console.log("inside the function");
    if (numberInhousehold === 1) {
        carbonfootprintPoints = carbonfootprintPoints + 14;
    } else if(numberInhousehold === 2) {
        carbonfootprintPoints = carbonfootprintPoints + 12;
    } else if(numberInhousehold === 3) {
        carbonfootprintPoints = carbonfootprintPoints + 10;
    } else if(numberInhousehold === 4) {
        carbonfootprintPoints = carbonfootprintPoints + 8;
    } else if(numberInhousehold === 5) {
        carbonfootprintPoints = carbonfootprintPoints + 6;
    } else if(numberInhousehold === 6) {
        carbonfootprintPoints = carbonfootprintPoints + 4;
    } else if(numberInhousehold > 6) {
        carbonfootprintPoints = carbonfootprintPoints + 2;
    }
    console.log(`Based on the number of members of the household of ${numberInhousehold} the points would be ${carbonfootprintPoints}.`);
}

let carbonfootprintPoints = 0;
//const numberInhousehold = 2;


// global scope

determineHouseholdPts(3)
determineHouseholdPts(4)