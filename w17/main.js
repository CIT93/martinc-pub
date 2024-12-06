import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";

renderTbl(cfpData);

const validateField = function (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add("invalid");
  } else {
      fieldError.textContent = "";
      event.target.classList.remove("invalid");
  } 
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);
document.getElementById('form').addEventListener
('submit', function (event) {
  event.preventDefault();
});

const determineRecycleItems = event => {
  const numberChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: event.target.glass.checked,
    plastic: event.target.plastic.checked,
    paper: event.target.paper.checked,
    aluminum: event.target.aluminum.checked,
    steel: event.target.steel.checked,
    food: event.target.food.checked,
    recyclePoints: (24 - (numberChecked * 4))
  }
}

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
      SUBMIT.textContent = '';
      
      const selectedRecyclingCategories = Array.from(event.target.recycling)
      .filter(input => input.checked)
      .map(input => input.value);

      const fpObj = new FP(
        FNAME.value,
        LNAME.value,
        parseInt(event.target.housem.value),
        event.target.houses.value,
        event.target.foodType.value,
        event.target.foodSrc.value,
        parseInt(event.target.dishwasherUses.value),
        parseInt(event.target.washingMachineUses.value),
        event.target.hasDishwasher.checked,
        event.target.hasWashingMachine.checked,
        parseFloat(event.target.garbageCans.value),
        determineRecycleItems(event),
        parseInt(event.target.householdPurchases.value),
        parseInt(event.target.car.value),
        parseInt(event.target.publicTranspo.value),
        parseInt(event.target.flight.value),
    );
    
      cfpData.push(fpObj)
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
  } else {
      SUBMIT.textContent = 'Form requires first and last name.';
  }
});

