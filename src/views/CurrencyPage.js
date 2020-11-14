import React from 'react';
import { Redirect } from 'react-router-dom';
import CurrencyTable from '../components/СurrencyTable/CurrencyTable';
import BaseLayout from '../layouts/BaseLayout';
import useTableScreen from '../hooks/UseTableScreen';

const CurrencyPage = () => {
  const tableScreen = useTableScreen();

  return Number(tableScreen) >= 768 ? <Redirect to="/" /> : (
    <BaseLayout>
      <CurrencyTable />
    </BaseLayout>
  )
}

export default CurrencyPage;
