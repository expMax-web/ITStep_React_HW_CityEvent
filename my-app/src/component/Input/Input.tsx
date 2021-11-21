import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
  notFullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  error,
  labelText,
  id,
  type,
  notFullWidth,
  ...inputProps
}) => {
  return (
    <div
      className={classNames(styles.InputItem, {
        [styles.InputItem_notFullWidth]: notFullWidth,
      })}
    >
      {labelText && (
        <label className={styles.LabelInput} htmlFor={id}>
          {labelText}
          {type !== "checkbox" && type !== "radio" && <span>:</span>}
        </label>
      )}
      <input
        className={styles.Input}
        id={id}
        type={type}
        {...inputProps}
      ></input>
      {error && <span className={styles.Error}>{error}</span>}
    </div>
  );
};
