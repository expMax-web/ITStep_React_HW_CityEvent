import React from "react";
import cn from "classnames";

import styles from "./Poster.module.scss";

interface PosterProps {
  poster?: string;
  big: boolean;
}

export const Poster: React.FC<PosterProps> = ({ poster, big }) => {
  return (
    <figure>
      <img
        src={poster}
        alt=""
        className={cn(styles.Poster, {
          [styles.Poster_Big]: big,
        })}
      />
    </figure>
  );
};
