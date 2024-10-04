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

function renderTblBtn(index, data){
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDelete.textContent = "Delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    btnDelete.addEventListener('click', function(e){
      console.log(e);
      data.splice(index, 1);
      renderTbl(data);
    })
    btnEdit.addEventListener('click', function(e){
      console.log(e)
      const rdata = data[index];
      form.firstname.value = rdata.firstName;
      form.lastname.value = rdata.lastName;
      form.houses.value = rdata.houseSize;
      form.housem.value = rdata.householdMembers;
      data.splice(index, 1);
      renderTbl(data);
    })
    return td;
}

function renderTblBody(data) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    console.log(index)
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
  if (data.length === 0) {
    return
  }
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export {renderTbl};

// tried to create a new function that would render the row but could not figure how to pass the obj through it
