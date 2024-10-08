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
    for (arr of cfpData) {
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${arr[4]}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = `based on number in and size of home`;
      const newP = document.createElement("p");
      newP.textContent = `this number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
      newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
      output.appendChild(newH2);
      output.appendChild(newH3);
      output.appendChild(newP);
    }
  }

    start(5, "apt");
    start(4, "large");
    start(3, "medium");
    start(2, "small");

    displayOutput()