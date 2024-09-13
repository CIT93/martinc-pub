const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if(size === "large") {
        houseSizePoints = 10;
    } else if(size === "medium") {
        houseSizePoints = 7;
    } else if(size === "small") {
        houseSizePoints = 4;
    } else if(size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints
  }

  function determineHouseholdPts(numberInhousehold) {
      let houseHoldPoints = 0;
      if (numberInhousehold === 1) {
        houseHoldPoints = 14
      } else if(numberInhousehold === 2) {
        houseHoldPoints = 12;
      } else if(numberInhousehold === 3) {
        houseHoldPoints = 10;
      } else if(numberInhousehold === 4) {
        houseHoldPoints = 8;
      } else if(numberInhousehold === 5) {
        houseHoldPoints = 6;
      } else if(numberInhousehold === 6) {
        houseHoldPoints = 4;
      } else if(numberInhousehold > 6) {
        houseHoldPoints = 2;
      }
    return houseHoldPoints
  }

  function start(householdMembers, houseSize) {
    const houseHoldPoints = determineHouseholdPts(householdMembers);
    const houseSizePoints = determineHouseSizePts(houseSize);
    const total = houseHoldPoints + houseSizePoints;
    cfpData.push([householdMembers,
      houseSize,
      houseHoldPoints,
      houseSizePoints,
      total,
    ]);
  }

  function displayOutput() {
    for (let i = 0; i < cfpData.length; i++) {
      console.log(i)
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
      // const newH3 = document.createElement("h3");
      // newH3.textContent = `based on number in and size of home`;
      // const newP = document.createElement("p");
      // newP.textContent = `this number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
      // newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
      output.appendChild(newH2);
      // output.appendChild(newH3);
      // output.appendChild(newP);
    }
  }

    start(5, "apt");
    start(4, "large");
    start(3, "medium");
    start(2, "small");

    displayOutput()


    // object coding challenge - refactor start function to store the data in an object isntead of an array


// Intro to object

const myArr = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small",
  displayOut: function(){
    console.log("this is a method call");
    console.log(this.houseSize);
    console.log(myObj.cfpTotal);
  }
};
// console.log(myObj.cfpTotal);
// console.log(myObj["houseSize"]);
myObj.displayOut()


   // for (initialization; condition; afterthought)
    //  statement

// how would you modify this code to count from 1 to 15?
    //for (let i = 0; i < 16; i++) {
      //console.log(i);
    //}
    // I did it! I changed it to i < 16 and it began to count to 15. a lucky and educated guess


    for (let i = 6; i >= 0; i--) {
            console.log(i);
          }


    // standard for loop


    // refactor for of loop above into standard for loop