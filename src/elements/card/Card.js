import React from "react";
import cn from "classnames";

import s from "./Card.module.css";

function Card({ name, birthday, img, nickname, status, id, onClick }) {
  return (
    <div className={s.container} onClick={onClick}>
      <div className={cn("flex-center", s.imgWrapper)}>
        <img src={img} alt={name} />
      </div>
      <footer className={cn("flex-column", s.footer)}>
        <h2>{name}</h2>
        <p className={s.nickName}>{nickname}</p>
        <p>{status}</p>
        <div className={cn("flex-end", s.birthdayDate)}>
          <span>{birthday}</span>
        </div>
      </footer>
    </div>
  );
}

export default Card;
