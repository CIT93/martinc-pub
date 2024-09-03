function determineHouseSizePts(size) {
  if(size === "large") {
    carbonfootprintPoints = carbonfootprintPoints + 10;
  } else if(size === "medium") {
    carbonfootprintPoints = carbonfootprintPoints + 7;
  } else if(size === "small") {
    carbonfootprintPoints = carbonfootprintPoints + 4;
  } else if(size === "apt") {
    carbonfootprintPoints = carbonfootprintPoints + 2;
  }
}


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


// global scope

determineHouseholdPts(5);
determineHouseSizePts("apt");

function determineHouseSizePts(houseSize) {
  if (houseSize === "large") {
    carbonFootprintPoints = carbonfootprintPoints + 10;
  } else if (houseSize === "medium") {
    carbonFootprintPoints = carbonfootprintPoints + 7;
  } else if (houseSize === "small") {
    carbonFootprintPoints = carbonfootprintPoints + 4;
  } else if (houseSize === "apartment") {
    carbonFootprintPoints = carbonfootprintPoints + 2;
  }
  console.log(
    `based on the my house size, ${houseSize}, the new carbon FP total would be ${carbonfootprintPoints}.`
  );
}

determineHouseSizePts("medium")

// I referred to the previous example we discussed in class and after reviewing it and other examples I was able to make sure it worked. The main difference was replacing numbers of the household with the sizes of house.