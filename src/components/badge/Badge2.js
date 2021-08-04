import React from 'react'
import style from './badge2.module.css'
function Badge2({ text,  count ,children}) {
  return (
    <div className={style.bagde}>
      <div className={style.title}>
        {children}
        {text}
      </div>
      <div className={style.count}>{count}</div>
    </div>
  );
}

export default Badge2
