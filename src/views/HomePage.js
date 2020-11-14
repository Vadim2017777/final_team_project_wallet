import React from 'react';
import Balance from '../components/Balance/Balance';
import TransactionList from '../components/TransactionList/TransactionList';
import {useSelector} from 'react-redux';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import useTableScreen from '../hooks/UseTableScreen';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import AddTransactionForm from '../components/AddTransactionForm/AddTransactionForm';
import { Wrapper } from '../components/Wrapper/Wrapper';

const HomePage = () => {
  const isActive = useSelector(state => getAddTransactionPage(state));
  const statusPage = isActive;
  const tableScreen = useTableScreen();
  return (
    <Wrapper>
    {Number(tableScreen) <= 767 &&!statusPage && <Balance/>}
    {Number(tableScreen) >= 1280 && <Balance/>}
    {Number(tableScreen) <= 767 && !statusPage && <TransactionList/>}
    {Number(tableScreen) >= 768 && <TransactionList/>}
    {Number(tableScreen) >= 768 && <CurrencyTable/>}
    {statusPage && <AddTransactionForm/>}
    </Wrapper>
  );
};

export default HomePage;