import React from 'react';
import s from './Wrapper.module.css'

export const Wrapper = ({children}) => <div className={s.wrapper}>{children}</div>;