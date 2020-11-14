import React from 'react';
import Balance from '../components/Balance/Balance';
import TransactionList from '../components/TransactionList/TransactionList';
import {useSelector} from 'react-redux';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import useTableScreen from '../hooks/UseTableScreen';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import AddTransactionForm from '../components/AddTransactionForm/AddTransactionForm';
import BaseLayout from '../layouts/BaseLayout';

const HomePage = () => {
  const isActive = useSelector(getAddTransactionPage);
  const tableScreen = useTableScreen();

  return (
    <BaseLayout>
      {(Number(tableScreen) <= 767 && !isActive) || (Number(tableScreen) >= 1280) && <Balance/>}
      {/*{Number(tableScreen) >= 1280 && <Balance/>}*/}
      {Number(tableScreen) <= 767 && !isActive && <TransactionList/>}
      {Number(tableScreen) >= 768 && <TransactionList/>}
      {Number(tableScreen) >= 768 && <CurrencyTable/>}
      {isActive && <AddTransactionForm/>}
    </BaseLayout>
  );
};

export default HomePage;
