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
    return houseHoldPoints;
  }

  function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
    const newH3 = document.createElement("h3");
    newH3.textContent = `based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `this number is based on the number of people in the house of ${obj.houseHM} (score: ${obj.HouseHPts}),`;
    newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSPts}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }

  function start(householdMembers, houseSize) {
    const houseHoldPoints = determineHouseholdPts(householdMembers);
    const houseSizePoints = determineHouseSizePts(houseSize);
    const total = houseHoldPoints + houseSizePoints;
    
    cfpData.push({
        houseHM: householdMembers,
        houseS: houseSize, 
        houseHPts: houseHoldPoints, 
        houseSPts: houseSizePoints, 
        cfpTotal: total
    });
  }


  function displayOutput() {
    for (let obj of cfpData) {
      console.log(obj);
      const output = document.getElementById("output");
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = `based on number in and size of home`;
      const newP = document.createElement("p");
      newP.textContent = `this number is based on the number of people in the house of ${obj.houseHM} (score: ${obj.houseHPts}),`;
      newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSPts}).`;
      output.appendChild(newH2);
      output.appendChild(newH3);
      output.appendChild(newP);
    }
  }


  // function displayOutput() {
  //   for (let i = 0; i < cfpData.length; i++) {
  //     console.log(i)
  //     const output = document.getElementById("output");
  //     const newH2 = document.createElement("h2");
  //     newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
  //     const newH3 = document.createElement("h3");
  //     newH3.textContent = `based on number in and size of home`;
  //     const newP = document.createElement("p");
  //     newP.textContent = `this number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
  //     newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
  //     output.appendChild(newH2);
  //     output.appendChild(newH3);
  //     output.appendChild(newP);
  //   }
  // }

    start(5, "apt");
    start(4, "large");
    start(3, "medium");
    start(2, "small");
    start(1, "apt");

    displayOutput()