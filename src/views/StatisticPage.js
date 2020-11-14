import React from 'react';
import useTableScreen from '../hooks/UseTableScreen';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import Statistics from '../components/Statistics/Statistics';
import Balance from '../components/Balance/Balance';
import BaseLayout from '../layouts/BaseLayout';

const StatisticPage = () => {
  const tableScreen = useTableScreen();

  return (
    <BaseLayout>
      <Statistics />
      {tableScreen >= 768 && <Balance/>}
      {tableScreen >= 1280 && <CurrencyTable />}
    </BaseLayout>
  );
};

export default StatisticPage;
