const handleDataDisplay = (filteredCost, filteredIn) => {
  const costs = filteredCost.reduce((acc = 0, {amount}) => acc + amount, 0);
  const income = filteredIn.reduce((acc = 0, {amount}) => acc + amount, 0);

  const expenses = filteredCost.filter(
    item => item.category === 'Main expenses',
  );
  const expensessumm = expenses.reduce((acc = 0, {amount}) => acc + amount, 0);

  const food = filteredCost.filter(item => item.category === 'Food');
  const foodsumm = food.reduce((acc = 0, {amount}) => acc + amount, 0);

  const car = filteredCost.filter(item => item.category === 'Car');
  const carsumm = car.reduce((acc = 0, {amount}) => acc + amount, 0);

  const selfcare = filteredCost.filter(item => item.category === 'Self care');
  const selfcaresumm = selfcare.reduce((acc = 0, {amount}) => acc + amount, 0);

  const childcare = filteredCost.filter(item => item.category === 'Child care');
  const childcaresumm = childcare.reduce(
    (acc = 0, {amount}) => acc + amount,
    0,
  );

  const house = filteredCost.filter(item => item.category === 'House');
  const housesumm = house.reduce((acc = 0, {amount}) => acc + amount, 0);

  const education = filteredCost.filter(item => item.category === 'Education');
  const educationsumm = education.reduce(
    (acc = 0, {amount}) => acc + amount,
    0,
  );

  const enterteinment = filteredCost.filter(
    item => item.category === 'Enterteinment',
  );
  const enterteinmentsumm = enterteinment.reduce(
    (acc = 0, {amount}) => acc + amount,
    0,
  );

  const others = filteredCost.filter(item => item.category === 'Others');
  const otherssumm = others.reduce((acc = 0, {amount}) => acc + amount, 0);

  const globalBalance = income - costs;

  const renderObg = {
    expenses: expensessumm,
    food: foodsumm,
    car: carsumm,
    selfcare: selfcaresumm,
    childcare: childcaresumm,
    house: housesumm,
    education: educationsumm,
    enterteinment: enterteinmentsumm,
    others: otherssumm,
    costs,
    income,
    globalBalance,
  };
  return renderObg;
};
export default handleDataDisplay;
