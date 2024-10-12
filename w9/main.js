import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./cfp.js";
import {FORM} from "./global.js"
import {saveLS, cfpData} from "./storage.js"

function start(firstName, lastName, householdMembers, houseSize) {
  const houseHoldPoints = determineHouseholdPts(householdMembers);
  const houseSizePoints = determineHouseSizePts(houseSize);
  const total = houseHoldPoints + houseSizePoints;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHM: householdMembers,
    houseS: houseSize,
    // houseHPts: houseHoldPoints,
    // houseSPts: houseSizePoints,
    cfpTotal: total,
  });
}

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  const errorFNElement = document.getElementById("firstnameError");
  const errorLNElement = document.getElementById("lastnameError");
    let messages1 = [];
    if (firstName === "" || firstName == null) {
        messages1.push("first name is requried");
    } else {
        messages1.push("");
    }

    if (messages1.length > 0 ) {
        e.preventDefault();
        errorFNElement.innerText = messages1.join(",")
    }

    let messages2 = [];
    if (lastName === "" || lastName == null) {
        messages2.push("last name is requried");
    } else {
        messages2.push("");
    }

    if (messages2.length > 0 ) {
        e.preventDefault();
        errorLNElement.innerText = messages2.join(",")
    }
    
if (firstName.length >= 1 && lastName.length >= 1) {
  start(firstName, lastName, householdMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
});

renderTbl(cfpData)

