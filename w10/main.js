import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";

const start = function(firstName, lastName, householdMembers, houseSize) {
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
};

renderTbl(cfpData);

// Function to validate a single field
const validateField = function(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = "";
    event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener('submit', function (e) {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "form reqiures first name and last name";
  }
});

//Rest Operator
// const add2 = function(...a) {
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

//Arrow Function

const add2 = a => {
  return 2 + a;
}

const result = add2(100);

//IIFE

const a = 3;

(function(a){
  console.log("inside IIFE ");
  console.log(a);
})(a);