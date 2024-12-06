import { resultDiv, tableId } from "./global.js";

export const renderTable = () => {
  if (!document.getElementById(tableId)) {
    const table = document.createElement("table");
    table.id = tableId;
    resultDiv.appendChild(table);
  }
};

export const addRecord = (record, index, editHandler, deleteHandler) => {
  let table = document.getElementById(tableId);
  if (!table) {
    renderTable();
    table = document.getElementById(tableId);
  }

  if (table.rows.length === 0) {
    const headerRow = document.createElement("tr");
    const headers = [
      "Money Available",
      "Total Expenses",
      "Remaining Money",
      "Suggested Savings",
      "Message",
      "Actions",
    ];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  }

  const row = document.createElement("tr");
  const rowData = [
    record.moneyAvailable.toFixed(2),
    record.totalExpenses.toFixed(2),
    record.remainingMoney.toFixed(2),
    record.suggestedSavings ? record.suggestedSavings.toFixed(2) : "",
    record.message,
  ];

  rowData.forEach((data) => {
    const td = document.createElement("td");
    td.textContent = data;
    row.appendChild(td);
  });

  const actionsTd = document.createElement("td");
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => editHandler(index));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteHandler(index));

  actionsTd.appendChild(editButton);
  actionsTd.appendChild(deleteButton);
  row.appendChild(actionsTd);

  table.appendChild(row);
};

export const renderAllRecs = (records, editHandler, deleteHandler) => {
  const table = document.getElementById(tableId);
  if (table) {
    table.innerHTML = "";
  }

  if (records.length > 0) {
    renderTable();
    const headerRow = document.createElement("tr");
    const headers = [
      "Money Available",
      "Total Expenses",
      "Remaining Money",
      "Suggested Savings",
      "Message",
      "Actions",
    ];
    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    records.forEach((record, index) =>
      addRecord(record, index, editHandler, deleteHandler)
    );

    const averageSavings = calculateAverageSavings(records);
    displayAverageSavings(averageSavings);
  } else if (table) {
    table.remove();
  }
};

export const calculateAverageSavings = (records) => {
  const totalSavings = records.reduce((sum, record) => {
    return sum + (record.suggestedSavings || 0);
  }, 0);

  return records.length > 0 ? totalSavings / records.length : 0;
};

export const displayAverageSavings = (averageSavings) => {
  let averageDiv = document.getElementById("averageSavings");

  if (!averageDiv) {
    averageDiv = document.createElement("div");
    averageDiv.id = "averageSavings";
    resultDiv.appendChild(averageDiv);
  }

  averageDiv.textContent = `Average Savings: ${averageSavings.toFixed(2)}`;
};
