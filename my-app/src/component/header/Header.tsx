import React from "react";
import { Navbar } from "../navbar/Navbar";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className={styles.HeaderTitle}>Афиша г. Ижевск</h1>
      <Navbar />
    </header>
  );
};
