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
renderTbl(cfpData);

FORM.addEventListener("submit", function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const householdMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, householdMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
});

renderTbl(cfpData)
