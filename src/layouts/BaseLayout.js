import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Wrapper from '../components/Wrapper/Wrapper';
import HomePageTitle from '../components/HomePageTitle/HomePageTitle';
import useTableScreen from '../hooks/UseTableScreen';
import {getAddTransactionPage} from '../redux/transactions/selectors';
import {authOperations} from '../redux/auth';
import Navigation from '../components/Navigation/Navigation';

const BaseLayout = ({ children }) => {
  const isActive = useSelector(getAddTransactionPage);
  const tableScreen = useTableScreen();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);


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
