import React from "react";
import styles from "./tariff.module.css";

function Tariff({ title, price, speed, isSelected, onClick, customStyles }) {
  return (
    <div
      className={`${styles.tariffCard} ${isSelected ? styles.selected : ""}`}
      onClick={onClick}
      style={customStyles}
    >
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__price}>
        <span className={styles.card__price_number}>{price}</span>
        <span className={styles.card__price_text}> руб/мес</span>
      </p>
      <p className={styles.card__speed}>до {speed} Мбит/сек</p>
      <p>Объем включенного трафика не ограничен</p>
    </div>
  );
}

export default Tariff;


