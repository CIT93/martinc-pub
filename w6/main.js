const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
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
    for (obj of cfpData) {
      const newH1 = document.createElement("h1");
      newH1.textContent = `${obj.firstname} ${obj.lastname}`;
      const newH2 = document.createElement("h2");
      newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
      const newH3 = document.createElement("h3");
      newH3.textContent = `based on number in and size of home`;
      const newP = document.createElement("p");
      newP.textContent = `this number is based on the number of people in the house of ${obj.houseHM} (score: ${obj.houseHPts}),`;
      newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSPts}).`;
      OUTPUT.appendChild(newH1);
      OUTPUT.appendChild(newH2);
      OUTPUT.appendChild(newH3);
      OUTPUT.appendChild(newP);
    }
  }

  FORM.addEventListener('submit', function(e){
      e.preventDefault();
      const firstName = FORM.firstname.value;
      const lastName = FORM.lastname.value;
      const householdMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      start(householdMembers, houseSize);
      OUTPUT.innerHTML = "";
      displayOutput();
      FORM.reset();
    })

    // is the apartment score correct? if not, why not?
    // no it is not. Because it was not getting the cprrect reference in the index for the aprtment value "apt" in the js

    // why are we doing all this work in the form to make sure the user gives us good data?
    // assume the user is not giving good data. using html to save us from writing a lot of javascript because its built in . make sure we're getting good data from the user

    