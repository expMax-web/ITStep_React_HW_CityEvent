import React from "react";

import styles from "./CinemaItemInfo.module.css";

interface CinemaItemInfoProps {
  title: String;
  genre: any;
  country?: String;
  year?: Number;
  id: string;
}

export const CinemaItemInfo: React.FC<CinemaItemInfoProps> = ({
  title,
  genre,
  country,
  year,
  id,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {genre &&
          genre.map((itemInfo: any, index: number) => (
            <span className={styles.tags} key={`genre.${index}`}>
              {itemInfo}
            </span>
          ))}
        {year && <span className={styles.tags}>{year},</span>}
        {country && <span className={styles.tags}>{country}</span>}
      </p>
    </div>
  );
};
