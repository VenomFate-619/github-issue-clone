import React, { useState } from "react";
import style from "./badge.module.css";
function Badge({ text, icon, count, onClick }) {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    if (click) {
      onClick(text.toLowerCase(), -1);
      setclick(false);
    } else {
      onClick(text.toLowerCase(), 1);
      setclick(true);
    }
  };
  return (
    <>
      <div className={style.bagde} onClick={handleClick}>
        <div className={style.title}>
          <i className={icon}></i>
          {text}
        </div>
        <div className={style.count}>{count}</div>
      </div>
    </>
  );
}

export default Badge;
