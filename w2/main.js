const myHeading = document.querySelector("h2");
myHeading.textContent = cfpTotal;

// 1. members of household
const myHouseHold = 12;
// 2. size of home
const myHomeSize = 7;
// 3. food choices
const myFoodIntake = 8;
// 4. water consumption
const myWaterIntake = 1;
// 5. household purchases each year
const myPurchases = 4; 
// 6. waste produced
const myWaste = 5;
// 7. waste recycled
const myRecycle = 8;
// 8. annual transportation scores
const myTransport = 6;
// 9. add points
const cfpTotal = myHouseHold + myHomeSize + myFoodIntake + myWaterIntake + myPurchases + myWaste + myRecycle + myTransport;
// 10. Write JS to update the rendered html (index.html) with total footprint
const cfpHeading = document.querySelector('h2')
cfpHeading.textContent = cfpTotal