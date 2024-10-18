import {FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = function() {
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
};

const onUpdate = function(index, data) {
  data.splice(index, 1);
  saveLS(data);
  renderTbl(data);
};

const renderTblBtn = function(obj, index, data){
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
      FORM[1].value = obj.firstName;
      FORM[2].value = obj.lastName;
      FORM[3].value = obj.houseS;
      FORM[4].value = obj.houseHM;
      onUpdate(index, data);
    })
    return td;
};

const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseHoldPoints" && key !== "houseSizePoints") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    };

    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  return tbody;
};

const renderTbl = function(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  }
  
};

export {renderTbl};

