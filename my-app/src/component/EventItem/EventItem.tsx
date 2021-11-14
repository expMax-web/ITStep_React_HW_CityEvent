import React from "react";

import { CinemaItemInfo } from "../CinemaItemInfo/CinemaItemInfo";
import { Poster } from "../Poster/Poster";

import styles from "./EventItem.module.css";

interface EventItemProps {
  info: any;
}

export const EventItem: React.FC<EventItemProps> = ({ info }) => {
  console.log(info.poster);
  return (
    <section className={styles.CinemaItemContainer}>
      <Poster poster={info.poster} />
      <CinemaItemInfo
        title={info.title}
        genre={info.genre}
        country={info.country}
        key={info.id}
        year={info.year}
      />
      <button className={styles.CinemaItemButton}>Добавить в избранное</button>
    </section>
  );
};
