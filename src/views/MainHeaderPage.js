import React from 'react';
import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import Navigation from '../components/Navigation/Navigation';
import {useSelector} from 'react-redux';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import useTableScreen from '../hooks/UseTableScreen';

const MainHeaderPage = () => {
  const isActive = useSelector(state => getAddTransactionPage(state));
  const statusPage = isActive;
  const tableScreen = useTableScreen();
  return (
    <>
      <HomePageTitle />
        {(!statusPage || Number(tableScreen) >= 768) && <Navigation />}
    </>
  );
};

export default MainHeaderPage;
