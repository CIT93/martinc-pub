import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";

renderTbl(cfpData);

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    
    event.target.classList.remove('invalid');
  }
};

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);
document.getElementById("form").addEventListener
("submit", event => {
  event.preventDefault();
});

FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  if (FNAME.value !== '' && LNAME.value !== '') {
      SUBMIT.textContent = '';
      const fpObj = new FP(
          FNAME.value,
          LNAME.value,
          parseInt(event.target.housem.value),
          event.target.houses.value,
          event.target.foodType.value,
          event.target.foodSrc.value,
          parseInt(event.target.dishwasherUses.value) || 0,
          parseInt(event.target.washingMachineUses.value) || 0,
          event.target.hasDishwasher.checked,
          event.target.hasWashingMachine.checked,
          parseInt(event.target.householdPurchases.value)
      );

      const editIndex = FORM.dataset.editIndex;
      if (typeof editIndex !== 'undefined') {
        cfpData[editIndex] = fpObj;
    } else {
        cfpData.push(fpObj);
    }

      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
  } else {
      SUBMIT.textContent = 'Form requires first and last name.';
  }
});

