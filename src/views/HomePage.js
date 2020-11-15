import React from 'react';
import Balance from '../components/Balance/Balance';
import TransactionList from '../components/TransactionList/TransactionList';
import {useSelector} from 'react-redux';
import {addTransactionPageSelector} from '../redux/transactions/selectors';
import useTableScreen from '../hooks/UseTableScreen';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import AddTransactionForm from '../components/AddTransactionForm/AddTransactionForm';
import BaseLayout from '../layouts/BaseLayout';

const HomePage = () => {
  const isActive = useSelector(addTransactionPageSelector);
  const tableScreen = useTableScreen();

  return (
    <BaseLayout>
      {tableScreen <= 767 && !isActive}
      {tableScreen >= 1280 && <Balance/>}
      {tableScreen <= 767 && !isActive && <TransactionList/>}
      {tableScreen >= 768 && <TransactionList/>}
      {tableScreen >= 768 && <CurrencyTable/>}
      {isActive && <AddTransactionForm/>}
    </BaseLayout>
  );
};

export default HomePage;
