import React from "react";
import { Link } from "react-router-dom";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { store } from "../../store";
import { addItemToFavorites } from "../../store/actionCreators/addItemToFavorites";
import { removeItemIntoFavorites } from "../../store/actionCreators/removeItemToFavorites";

import { CinemaItemInfo } from "../CinemaItemInfo/CinemaItemInfo";
import { Poster } from "../Poster/Poster";

import styles from "./EventItem.module.css";

interface EventItemProps {
  info: any;
  favoriteItem?: boolean;
}

export const EventItem: React.FC<EventItemProps> = ({ info, favoriteItem }) => {
  const { favorite } = useTypeSelector((state) => state.favorite);
  const { events } = useTypeSelector((state) => state.events);
  return (
    <section className={styles.CinemaItemContainer}>
      <Poster poster={info.poster} big={false} />
      <CinemaItemInfo
        title={info.title}
        genre={info.genre}
        country={info.country}
        id={info.id}
        year={info.year}
      />
      <Link to={`/about/${info.type}/${info.id}`} className={styles.ItemLink}>
        Подробнее о событии
      </Link>
      {favoriteItem ? (
        <button
          className={styles.CinemaItemButton}
          onClick={() =>
            store.dispatch(removeItemIntoFavorites(info.id, favorite))
          }
        >
          Удалить из избранного
        </button>
      ) : (
        <button
          className={styles.CinemaItemButton}
          onClick={() =>
            store.dispatch(
              addItemToFavorites(info.id, info.type, favorite, events)
            )
          }
        >
          Добавить в избранное
        </button>
      )}
    </section>
  );
};
