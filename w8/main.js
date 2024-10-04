import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

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
  start(firstName, lastName, householdMembers, houseSize);
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);
  FORM.reset();
});
