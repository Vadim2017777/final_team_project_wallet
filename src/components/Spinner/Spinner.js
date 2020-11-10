import React from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spiner.module.css';

export default function Spinner() {
  return (
    <div className={s.container}>
      <Loader type="ThreeDots" color="#f3713f" height={100} width={100} />
    </div>
  );
}
