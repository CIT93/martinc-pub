const TBL = document.getElementById("tab-data")

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return table
  }

  function renderTbl(data){
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    data.forEach(function (obj) {
    const tdName = document.createElement("td");
      tdName.textContent = obj.firstName;
      const tdTotal = document.createElement("td");
      tdTotal.textContent = obj.cfpTotal;
      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
      tbody.appendChild(tr);
  })
    
    // const trTextArr = ["Martin", 2, "Medium", 19];
    // trTextArr.forEach(function(text){
    //   const td = document.createElement("td");
    //   td.textContent = text;
    //   tr.appendChild(td);
    // })
    // const td = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDelete = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDelete.textContent = "Delete";
    // td.appendChild(btnEdit);
    // td.appendChild(btnDelete);
    // tr.appendChild(td);
    // tbody.appendChild(tr)
    table.appendChild(tbody);
    TBL.appendChild(table);
  }

  export {renderTbl, renderTblHeading};