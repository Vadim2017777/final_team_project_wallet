import React from 'react';
import style from './Wrapper.module.css'

const Wrapper = ({children}) => <div className={style.wrapperHomePage}>{children}</div>;

export default Wrapper;
