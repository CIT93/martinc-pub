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
    cfpData.push([householdMembers, houseSize, houseHoldPoints, houseSizePoints, total]);
  }

  function displayOutput() {
    for (arr of cfpData){
      console.log(arr)
      const output = document.getElementById("output");
      const newP = document.createElement("p");
      newP.textContent = `Carbon footprint total is ${arr[4]}`;
      output.appendChild(newP);
      output.appendChild(newP1);
      output.appendChild(newP2);
      output.appendChild(newP3);
      output.appendChild(newP4);
      output.appendChild(newP5);
    }
  }

    start(5, "apt");
    start(4, "large");
    start(3, "medium");
    start(2, "small");
    start(1);
    start(6);
    start(7);

    displayOutput()