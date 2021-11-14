import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cinema, Concerts, Perfomances } from "../../pages/info/constInfo";
import { FavoritesArr } from "../../pages/info/Favorites";

import { CinemaItemInfo } from "../CinemaItemInfo/CinemaItemInfo";
import { Poster } from "../Poster/Poster";

import styles from "./EventItem.module.css";

interface EventItemProps {
  info: any;
  favorite?: boolean;
}

export const EventItem: React.FC<EventItemProps> = ({ info, favorite }) => {
  const removeItemIntoFavorites = (id: string): void => {
    // const index = Favorites.findIndex((item: any) => item.id === Number(id));
    // if (index >= 0) {
    //   alert(1);
    // }
  };

  const addItemToFavorites = (id: string, type: string): void => {
    // let itemInfo: any = {};
    // if (type === "movie") {
    //   itemInfo = Cinema.find((item: any) => item.id === Number(id));
    // }
    // if (type === "perfomances") {
    //   itemInfo = Perfomances.find((item: any) => item.id === Number(id));
    // }
    // if (type === "сoncerts") {
    //   itemInfo = Concerts.find((item: any) => item.id === Number(id));
    // }
    // if (!Favorites.find((item: any) => item.id === Number(itemInfo.id))) {
    //   FavoritesArr.push(itemInfo as never);
    // }
  };
  return (
    <section className={styles.CinemaItemContainer}>
      <Poster poster={info.poster} big={false} />
      <CinemaItemInfo
        title={info.title}
        genre={info.genre}
        country={info.country}
        key={info.id}
        year={info.year}
      />
      <Link to={`/about/${info.type}/${info.id}`} className={styles.ItemLink}>
        Подробнее о событии
      </Link>
      {favorite ? (
        <button
          className={styles.CinemaItemButton}
          onClick={() => removeItemIntoFavorites(info.id)}
        >
          Удалить из избранного
        </button>
      ) : (
        <button
          className={styles.CinemaItemButton}
          onClick={() => addItemToFavorites(info.id, info.type)}
        >
          Добавить в избранное
        </button>
      )}
    </section>
  );
};
