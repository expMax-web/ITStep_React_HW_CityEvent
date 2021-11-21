import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.NavList}>
        <li className={styles.NavListItem}>
          <Link to={`/Cinema`} className={styles.NavListItemLink}>
            Кино
          </Link>
        </li>
        <li className={styles.NavListItem}>
          <Link to={`/Performances`} className={styles.NavListItemLink}>
            Спектакли
          </Link>
        </li>
        <li className={styles.NavListItem}>
          <Link to={`/Concerts`} className={styles.NavListItemLink}>
            Концерты
          </Link>
        </li>
        <li className={styles.NavListItem}>
          <Link to={`/Favorites`} className={styles.NavListItemLink}>
            Избранное
          </Link>
        </li>
        <li className={styles.NavListItem}>
          <Link to={`/addEvent`} className={styles.NavListItemLink}>
            Добавить событие
          </Link>
        </li>
      </ul>
    </nav>
  );
};
