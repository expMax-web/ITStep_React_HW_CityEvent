import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";

export const addItemToFavorites = (
  id: string,
  type: string,
  favorite: any,
  events: any
): FavoriteAction => {
  let itemInfo: any = {};
  if (type === "movie") {
    itemInfo = events.Cinema.find((item: any) => item.id === id);
  }
  if (type === "perfomances") {
    itemInfo = events.Perfomances.find((item: any) => item.id === id);
  }
  if (type === "сoncerts") {
    itemInfo = events.Concerts.find((item: any) => item.id === id);
  }

  if (favorite) {
    if (!favorite.find((item: any) => item.id === id)) {
      return {
        type: FavoriteActionTypes.ADD_FAVORITE,
        payload: [...favorite, itemInfo],
      };
    } else
      return {
        type: FavoriteActionTypes.ADD_FAVORITE,
        payload: [...favorite],
      };
  } else {
    return {
      type: FavoriteActionTypes.ADD_FAVORITE,
      payload: [itemInfo],
    };
  }
};
