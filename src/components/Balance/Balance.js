import React, {useState, useEffect} from 'react';
import style from './Balance.module.css';

const Balance = ({balance}) => {
  const [tabletScreen, setTabletScreen] = useState(window.innerWidth);

  const handleResize = () => {
    setTabletScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [tabletScreen]);

  return (
    <div className={style.box}>
      {(Number(tabletScreen) < 768 || Number(tabletScreen) > 1279) && (
        <div className={style.balance}>
          <span className={style.text}>Balance</span>
          <span className={style.amount}>{balance} UAH</span>
        </div>
      )}
    </div>
  );
};

export default Balance;
