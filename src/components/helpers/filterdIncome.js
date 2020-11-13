const filtredIncome = (filteredCost, inputMonth = '', inputYear = '') =>
  filteredCost.filter(item => {
    if (inputMonth && inputYear) {
      return item.month === inputMonth && item.year === inputYear;
    }
    if (inputMonth && inputYear === '') {
      return item.month === inputMonth;
    }
    if (inputMonth === '' && inputYear) {
      return item.year === inputYear;
    }
    if (inputMonth === '' && inputYear === '') {
      return item;
    }
    return item;
  });

export default filtredIncome;
