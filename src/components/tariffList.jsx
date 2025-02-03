import React from "react";
import Tariff from "./tariff";
import styles from "./tariffList.module.css";

function TariffList() {
  const tariffs = [
    {
      title: "Безлимитный 300",
      price: 300,
      speed: 10,
      colors: {
        "--background-color": "var(--color-card-1)",
        "--title-background-color": "var(--color-title-1)",
      },
    },
    {
      title: "Безлимитный 450",
      price: 450,
      speed: 50,
      colors: {
        "--background-color": "var(--color-card-2)",
        "--title-background-color": "var(--color-title-2)",
      },
    },
    {
      title: "Безлимитный 550",
      price: 550,
      speed: 100,
      colors: {
        "--background-color": "var(--color-card-3)",
        "--title-background-color": "var(--color-title-3)",
      },
    },
    {
      title: "Безлимитный 1000",
      price: 1000,
      speed: 200,
      colors: {
        "--background-color": "var(--color-card-4)",
        "--title-background-color": "var(--color-title-4)",
      },
    },
  ];

  return (
    <div className={styles.card__list}>
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          customStyles={
            index === 2
              ? {
                  ...tariff.colors,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.1)",
                }
              : tariff.colors
          }
        />
      ))}
    </div>
  );
}

export default TariffList;
