import React, { InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  error,
  id,
  labelText,
  ...inputProps
}) => {
  return (
    <div className={styles.InputItem}>
      <label htmlFor={id} className={styles.LabelInput}>
        {labelText}:
      </label>
      <input className={styles.Input} {...inputProps}></input>
      {error && <span className={styles.Error}>{error}</span>}
    </div>
  );
};
