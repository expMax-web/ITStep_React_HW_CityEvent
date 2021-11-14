import React from "react";

import styles from "./Poster.module.css";

interface PosterProps {
  poster?: string;
}

export const Poster: React.FC<PosterProps> = (poster) => {
  return (
    <figure>
      <img src={poster.poster} alt="" className={styles.Poster} />
    </figure>
  );
};
