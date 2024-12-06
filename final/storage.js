const LSkey = "financeRecord";

export const getRecords = () => JSON.parse(localStorage.getItem(LSkey)) || [];

export const saveRecords = (records) => {
  localStorage.setItem(LSkey, JSON.stringify(records));
};
