const TBL = document.getElementById("tab-data");

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

function renderTbl(data) {
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");

  data.forEach(function (obj) {
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
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl };

// I tried to create multiple if statements for each desired output but encountered problems. not sure if I need === in the if statement or how to apply multiple variables in the if statement as well.

// code is working
