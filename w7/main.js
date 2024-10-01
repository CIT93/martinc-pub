import {renderTbl} from "./render.js";
import {determineHouseSizePts, determineHouseholdPts} from "./cfp.js";

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output");
const cfpData = [];

  function start(firstName, lastName, householdMembers, houseSize) {
    const houseHoldPoints = determineHouseholdPts(householdMembers);
    const houseSizePoints = determineHouseSizePts(houseSize);
    const total = houseHoldPoints + houseSizePoints;
    cfpData.push({
        houseHM: householdMembers,
        houseS: houseSize, 
        houseHPts: houseHoldPoints, 
        houseSPts: houseSizePoints, 
        cfpTotal: total,
        firstName: firstName,
        lastName: lastName
    });
  }

  FORM.addEventListener('submit', function(e){
      e.preventDefault();
      const firstName = FORM.firstname.value;
      const lastName = FORM.lastname.value;
      const householdMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      start(firstName, lastName, householdMembers, houseSize);
      OUTPUT.innerHTML = "";
      //displayOutput();
      renderTbl(cfpData);
      FORM.reset();
    })

    // is the apartment score correct? if not, why not?
    // no it is not. Because it was not getting the cprrect reference in the index for the aprtment value "apt" in the js

    // why are we doing all this work in the form to make sure the user gives us good data?
    // assume the user is not giving good data. using html to save us from writing a lot of javascript because its built in . make sure we're getting good data from the user

    // I originally tried to rewrite the displayOutput function to cut down on "expensive" code by trying to refrence the tbl-data but could not get it working. did not think to create a new function with the TblHeading and put the data from the renderTbl data in there then appending what was left
// I could not figure out why my code was not working until devtools indicated it was because my const trTextArr = ["Martin", 2, "Medium", 19]; was with brackets instead of parenthesis. Also my text blended in with my background color so I had to change that as well after I highlighted my outputs in devtools

// the idea of creating modules is very helpful in managing code and functions into separate files or modules for ease of access to various features instead of it all being in one whole file. having to search for functions and such can be inconvenient

// I did something similar to what we did in the previous code along by creating a new module and pasting the determine functions of the cfp data in there.