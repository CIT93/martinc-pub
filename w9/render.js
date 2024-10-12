import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

function renderTblHeading() {
  TBL.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function onUpdate(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

function onUpdate(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
}

function renderTblBtn(index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    btnDelete.addEventListener('click', function(e){
      onUpdate(index, data);
    })
    btnEdit.addEventListener('click', function(e){
      const rdata = data[index];
      FORM.firstname.value = rdata.firstName;
      FORM.lastname.value = rdata.lastName;
      FORM.houses.value = rdata.houseS;
      FORM.housem.value = rdata.houseHM;
      onUpdate(index, data);
    })
    return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (
        key !== "lastName" &&
        key !== "houseHoldPoints" &&
        key !== "houseSizePoints"
      ) {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const td = renderTblBtn(index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  }
  
}

export {renderTbl};

// from my understanding of local storage, it is a useful way to retrieve data that was previously input into the browser through the setItem() command which allows you to store a pair of key data to the local storage. 

// I put the render table in the main.js outisde of any code blocks. however, I could not figure out which method to use and which functions or variables to reference so I tried to make a function that would be referenced instead in the render.js. The function included data from both the renderTbl and saveLS but I was missing the index, the splice of the data and the index being passed through the onUpdate funtion alongside the data