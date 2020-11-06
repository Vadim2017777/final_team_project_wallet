const handleFilteredCostsInput = async (
  transactions,
  inputMonth,
  inputYear,
) => {
  const tr = await transactions;
  console.log(tr);

  const filteredCost = tr.filter(({type}) => type === '-');
  filteredCost.filter(item => {
    console.log(inputMonth);
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
  });
};

export default handleFilteredCostsInput;
