import React from 'react';

import s from './Notification.module.css';

const Notification = ({text}) => {
  return (
    <div className={s.container}>
      <p>{text}</p>
    </div>
  );
};

export default Notification;
