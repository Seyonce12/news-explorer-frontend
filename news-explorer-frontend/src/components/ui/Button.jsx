import React from 'react';
import styles from './Button.module.css';

export default function Button({ children, variant='primary', className='', ...rest }){
  const cls = [styles.button, styles[variant] || '', className].filter(Boolean).join(' ');
  return <button className={cls} {...rest}>{children}</button>;
}
