import React from "react";

import styles from "./SubmitButton.module.scss";

export const SubmitButton: React.FC = ({ children }) => {
  return (
    <div>
      <button type="submit" className={styles.SubmitButton}>
        {children}
      </button>
    </div>
  );
};
