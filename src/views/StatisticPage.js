import React from 'react';
import useTableScreen from '../hooks/UseTableScreen';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import Statistics from '../components/Statistics/Statistics';
import {Wrapper} from '../components/Wrapper/Wrapper';
import Balance from '../components/Balance/Balance';

const StatisticPage = () => {
  const tableScreen = useTableScreen();
  return (
    <Wrapper>
      <Statistics />
      {tableScreen >= 768 && <Balance/>}
      {tableScreen >= 1280 && <CurrencyTable />}
    </Wrapper>
  );
};

export default StatisticPage;
