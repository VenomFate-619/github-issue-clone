import React from 'react'
import style from './badge2.module.css'
function Badge2({ text,  count ,children,active=false}) {
  console.log(active)
  return (
    <div className={`${style.bagde} ${active && style.active}` }>
      <div className={style.title}>
        {children}
        {text}
      </div>
      <div className={style.count}>{count}</div>
    </div>
  );
}

export default Badge2
