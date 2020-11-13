export const filteredTypeMinus = transactions =>
  transactions.filter(({type}) => type === '-');

export const filteredTypePlus = transactions =>
  transactions.filter(({type}) => type === '+');
