import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const calculateAvg = function (data) {
  const totalPoints = data.reduce((sum, obj) => {
    return sum + obj.houseHoldPoints + obj.houseSizePoints + obj.foodChoicePoints + obj.foodSourcePoints + obj.waterConsumPoints + obj.purchasesPoints + obj.cans + obj.recycle + obj.car + obj.publicTranspo + obj.flight;
  }, 0);
  const averagePoints = totalPoints / data.length;
  return averagePoints
}

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["firstName", "lastName", "Footprint", "Actions"];

  headingTextArr.forEach(function (text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDelete);

  btnDelete.addEventListener('click', (event) => {
    onUpdate(data, index);
});

const onUpdate = function (data, index) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

btnEdit.addEventListener("click", (event) => {
  FORM.firstName.value = obj.first;
  FORM.lastName.value = obj.last;
  FORM.housem.value = obj.houseMembers;
  FORM.houses.value = obj.houseSize;
  FORM.foodType.value = obj.foodType;
  FORM.foodSrc.value = obj.foodSrc;
  FORM.water.value = obj.waterPoints.toString();
  FORM.purchases.value = obj.purchases;
  FORM.glass.checked = obj.recycle.glass;
  FORM.plastic.checked = obj.recycle.plastic;
  FORM.steel.checked = obj.recycle.steel;
  FORM.paper.checked = obj.recycle.paper;
  FORM.food.checked = obj.recycle.food;
  FORM.aluminum.checked = obj.recycle.aluminum;
  FORM.car.value = obj.car;
  FORM.publicTransport.value = obj.publicTransport;
  FORM.flight.value = obj.flight;
});
return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
      const tr = document.createElement("tr");
      const keys = ["first", "last", "totalValue"];
          keys.forEach(key => {
      const td = document.createElement("td");
    td.textContent = obj[key];
    tr.appendChild(td);
});

      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  const avgPoints = calculateAvg(data);
  const addRow = document.createElement("tr");
  addRow.textContent = `Average Footprint: ${avgPoints}`;
  tbody.appendChild(addRow);
  table.appendChild(tbody);
  TBL.appendChild(table);
  }
  
};

export {renderTbl};
