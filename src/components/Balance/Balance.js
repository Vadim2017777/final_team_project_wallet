import React, {useState, useEffect} from 'react';
import s from './Balance.module.css';

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
    <div className={s.box}>
      {(Number(tabletScreen) < 768 || Number(tabletScreen) > 1279) && (
        <div className={s.balance}>
          <span className={s.text}>Balance</span>
          <span className={s.amount}>{balance} грн</span>
        </div>
      )}
    </div>
  );
};


export default Balance;
