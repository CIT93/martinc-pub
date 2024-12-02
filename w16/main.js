import { renderTbl } from "./render.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
import {FP} from "./fp.js";

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
        const fpObj = new FP(
            FNAME.value,
            LNAME.value,
            parseInt(e.target.housem.value),
            e.target.houses.value,
            e.target.foodType.value,
            e.target.foodSrc.value,
            parseInt(e.target.dishwasherUses.value),
            parseInt(e.target.washingMachineUses.value),
            e.target.hasDishwasher.checked,
            e.target.hasWashingMachine.checked
        );

        const editIndex = FORM.dataset.editIndex;
        if (editIndex !== undefined) {
            cfpData[editIndex] = fpObj; 
            delete FORM.dataset.editIndex; 
        } else {
            cfpData.push(fpObj); 
        }

        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    } else {
        SUBMIT.textContent = "form requires first and last name";
    }
});

// let pizza
// function orderPizza() {
//   console.log('order pizza')
//   setTimeout(() => {
// pizza = '🍕'
// console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log('pizza was ordered')
// }
// orderPizza()
// console.log('call Qoli')
// console.log(`eat ${pizza}`)

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza) {
//   console.log(`eat the ${pizza}`)
// }

// orderPizza(pizzaReady)
// console.log(`call Qoli`)

// window.addEventListener('click', callback)

// function callback() {
//   console.log('clicked')
// }

// function thing1(callback) {
// callback()
// }

// function thing2(callback) {
//   callback()
// }

// function thing3(callback) {
//   callback()
// }

// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })