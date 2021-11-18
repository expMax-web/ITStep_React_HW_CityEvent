import React, { InputHTMLAttributes } from "react";

import styles from "./TextArea.module.scss";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
}

export const TextArea: React.FC<TextAreaProps> = ({
  error,
  id,
  labelText,
  name,
  ...inputProps
}) => {
  return (
    <div className={styles.TextAreaContainer}>
      <label className={styles.TextAreaLabel} htmlFor={id}>
        {labelText}
      </label>
      <textarea className={styles.TextArea} {...inputProps} />
      {error && <span className={styles.Error}>{error}</span>}
    </div>
  );
};
