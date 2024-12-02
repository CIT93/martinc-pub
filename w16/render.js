import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.totalValue, 0);
  const waterConsumption = data.reduce((sum, ea) => sum + ea.waterConsumptionPoints, 0);

  const tableRef = document.getElementById("table-id");
  const newTR = tableRef.insertRow(-1);
  const newTD = newTR.insertCell(0);
  const newTD_1 = newTR.insertCell(0);
  const newTD_2 = newTR.insertCell(0);

  const newLabel = document.createTextNode(`Average Footprint + Water`);
  const newText = document.createTextNode(`${Math.floor((reduceTotal + waterConsumption) / data.length)}`);
  newTD_1.appendChild(newLabel);
  newTD.appendChild(newText);
};

const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["firstName", "lastName", "Footprint", "Water Points", "Actions"];
  headingTextArr.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
};

const onUpdate = (index, data) => {
  const entry = data[index];
  FORM.firstName.value = entry.first;
  FORM.lastName.value = entry.last;
  FORM.housem.value = entry.houseMembers;
  FORM.houses.value = entry.houseSize;
  FORM.foodType.value = entry.foodType;
  FORM.foodSrc.value = entry.foodSrc;
  FORM.dishwasherUses.value = entry.dishwasherUses || 0;
  FORM.washingMachineUses.value = entry.washingMachineUses || 0;
  FORM.hasDishwasher.checked = entry.hasDishwasher;
  FORM.hasWashingMachine.checked = entry.hasWashingMachine;

  FORM.dataset.editIndex = index;
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDelete = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";
  td.appendChild(btnEdit);
  td.appendChild(btnDelete);

  btnDelete.addEventListener('click', () => {
      onUpdate(index, data);
  });

  btnEdit.addEventListener('click', () => {
      onUpdate(index, data); 
  });

  return td;
};

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
      const tr = document.createElement("tr");
      const keys = ["first", "last", "totalValue", "waterConsumptionPoints"];
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
  table.appendChild(tbody);
  TBL.appendChild(table);
  calculateAvg(data);
  }
  
};

export {renderTbl};

