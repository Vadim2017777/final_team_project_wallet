const handleDataDisplay = filteredCost => {
  const fog = filteredCost.filter(item => item.category === 'Fog');
  const fogsumm = fog.reduce((acc = 0, {balance}) => acc + balance, 0);
  const food = filteredCost.filter(item => item.category === 'Food');
  const foodsumm = food.reduce((acc = 0, {balance}) => acc + balance, 0);
  const car = filteredCost.filter(item => item.category === 'Car');
  const carsumm = car.reduce((acc = 0, {balance}) => acc + balance, 0);
  const obj = {food: foodsumm, car: carsumm, fog: fogsumm};

  return obj;
};
export default handleDataDisplay;
