import React from 'react';
import {useSelector} from 'react-redux';
import Wrapper from '../components/Wrapper/Wrapper';
import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import useTableScreen from '../hooks/UseTableScreen';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import Navigation from '../components/Navigation/Navigation';

const BaseLayout = ({ children }) => {
  const isActive = useSelector(getAddTransactionPage);
  const tableScreen = useTableScreen();

  return (
    <>
      <HomePageTitle />
      {(!isActive || Number(tableScreen) >= 768) && <Navigation />}
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
};

export default BaseLayout;
