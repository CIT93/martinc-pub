export class FinanceManager {
  constructor(lowBalanceThreshold = 50, savingPercentage = 0.2) {
    this.lowBalanceThreshold = lowBalanceThreshold;
    this.savingPercentage = savingPercentage;
  }

  createRecord(moneyAvailable, expenses) {
    const totalExpenses =
      expenses.food + expenses.transportation + expenses.bills;

    let record = {
      moneyAvailable: moneyAvailable,
      expenses: expenses,
      totalExpenses: totalExpenses,
      remainingMoney: moneyAvailable - totalExpenses,
      message: "",
    };

    if (totalExpenses > moneyAvailable) {
      record.message = "Expenses exceed money available. Unable to save.";
    } else if (
      record.remainingMoney >= this.lowBalanceThreshold &&
      record.remainingMoney > 0
    ) {
      record.suggestedSavings =
        record.remainingMoney * this.savingPercentage;
      record.message = `You can save ${record.suggestedSavings.toFixed(2)}.`;
    } else {
      record.message = "Remaining balance too low.";
    }

    return record;
  }
}
