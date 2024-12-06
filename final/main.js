import { renderTable, addRecord, renderAllRecs, calculateAverageSavings, displayAverageSavings } from "./render.js";
import { getRecords, saveRecords } from "./storage.js";
import { FinanceManager } from "./decision.js";

const financeManager = new FinanceManager();
let financeRecord = getRecords();

const FORM = document.getElementById("output");

const createRecord = (moneyAvailable, expenses) => {
  const record = financeManager.createRecord(moneyAvailable, expenses);

  financeRecord.push(record);
  saveRecords(financeRecord);

  addRecord(record, financeRecord.length - 1, editRecord, deleteRecord);

  const averageSavings = calculateAverageSavings(financeRecord);
  displayAverageSavings(averageSavings);
};

const editRecord = (index) => {
  const record = financeRecord[index];

  FORM.moneyAvailable.value = record.moneyAvailable;
  FORM.foodExpense.value = record.expenses.food;
  FORM.transportationExpense.value = record.expenses.transportation;
  FORM.billsExpense.value = record.expenses.bills;

  deleteRecord(index);
};

const deleteRecord = (index) => {
  financeRecord.splice(index, 1);
  saveRecords(financeRecord);

  if (financeRecord.length > 0) {
    renderAllRecs(financeRecord, editRecord, deleteRecord);
  } else {
    const table = document.getElementById("resultsTable");
    if (table) table.remove();
  }

  const averageSavings = calculateAverageSavings(financeRecord);
  displayAverageSavings(averageSavings);
};

FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  const moneyAvailableError = document.getElementById("moneyAvailableError");
  moneyAvailableError.textContent = "";

  const moneyAvailable = parseFloat(FORM.moneyAvailable.value);
  const foodExpense = parseFloat(FORM.foodExpense.value);
  const transportationExpense = parseFloat(
    FORM.transportationExpense.value
  );
  const billsExpense = parseFloat(FORM.billsExpense.value);

  const totalExpenses = foodExpense + transportationExpense + billsExpense;
  if (moneyAvailable < totalExpenses) {
    moneyAvailableError.textContent =
      "Money available must be greater than or equal to the total expenses.";
    return;
  }

  const expenses = {
    food: foodExpense,
    transportation: transportationExpense,
    bills: billsExpense,
  };

  createRecord(moneyAvailable, expenses);

  FORM.reset();
});

renderTable();
if (financeRecord.length > 0) {
  renderAllRecs(financeRecord, editRecord, deleteRecord);

  const averageSavings = calculateAverageSavings(financeRecord);
  displayAverageSavings(averageSavings);
}
