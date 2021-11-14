import React from "react";

import styles from "./CinemaItemInfo.module.css";

interface CinemaItemInfoProps {
  title: String;
  genre: any;
  country?: String;
  year?: Number;
}

export const CinemaItemInfo: React.FC<CinemaItemInfoProps> = ({
  title,
  genre,
  country,
  year,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {genre &&
          genre.map((itemInfo: any) => (
            <span className={styles.tags}>{itemInfo}</span>
          ))}
        {year && <span className={styles.tags}>{year},</span>}
        {country && <span className={styles.tags}>{country}</span>}
      </p>
    </div>
  );
};
