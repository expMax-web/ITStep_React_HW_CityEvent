import React from "react";

import styles from "./HomePage.module.css";

export const HomePage: React.FC = () => {
  return (
    <section className={styles.HomePage}>
      <h1 className={styles.HomePageTitle}>
        В данном приложении Вы можете просмотреть кино, концерты, спектакли,
        проходящие в г. Ижевск
      </h1>
      <p className={styles.HomePageDescription}>
        Пожалуйста, выберите интересующу ю Вас категорию, предложенную выше
      </p>
    </section>
  );
};
