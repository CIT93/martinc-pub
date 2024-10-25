import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseholdPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";

const start = (...points) => {
  const houseHoldPoints = determineHouseholdPts(points[2]);
  const houseSizePoints = determineHouseSizePts(points[3]);
  const total = houseHoldPoints + houseSizePoints;
  cfpData.push({
    firstName: points[0],
    lastName: points[1],
    houseHM: points[2],
    houseS: points[3],
    houseHPts: houseHoldPoints,
    houseSPts: houseSizePoints,
    cfpTotal: total,
  });
};

renderTbl(cfpData);

// Function to validate a single field
const validateField = event => {
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
document.getElementById("form").addEventListener
("submit", event => {
  event.preventDefault();
});


FORM.addEventListener('submit', e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    // start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodType.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent = "form requires first name and last name";
  }
});

//Rest Operator
// const add2 = function(...a) {
//   return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

//Arrow Function

// const add2 = a => {
//   return 2 + a;
// }

// const result = add2(100);

//IIFE

// const a = 3;

// (function(a){
//   console.log("inside IIFE ");
//   console.log(a);
// })(a);

// Creating objects with class

// const me = {
//   name: "Martin",
//   hairColor: "Brown",
//   location: "Home",
//   sleepScore: 77,
//   introduce: function() {
//     console.log(this)
//     console.log(`this is $(this.name) with $(this.hairColor) hair color is in $(this.location) with a $(this.sleepScore) sleep score`)
//   }
// }

// const you = {
//   name: "Rio",
//   hairColor: "Brown",
//   location: "office",
//   sleepScore: 95,
//   introduce: function() {
//     console.log(this)
//     console.log(`this is $(this.name) with $(this.hairColor) hair color is in $(this.location) with a $(this.sleepScore) sleep score`)
//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore){
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`this is $(this.name) with $(this.hairColor) hair color is in $(this.location) with a $(this.sleepScore) sleep score`)
//   }
// }
// const Martin = new Human("Martin", "Brown", "home", 77);
// const Rio = new Human("Rio", "Brown", "office", 95);
// Martin.introduce();
// Rio.introduce();
// Martin.hrv = 50;