import { Info } from "../../pages/info/constInfo";
import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";

export const addItemToFavorites = (
  id: string,
  type: string,
  favorite: any
): FavoriteAction => {
  let itemInfo: any = {};
  if (type === "movie") {
    itemInfo = Info.Cinema.find((item: any) => item.id === Number(id));
  }
  if (type === "perfomances") {
    itemInfo = Info.Perfomances.find((item: any) => item.id === Number(id));
  }
  if (type === "сoncerts") {
    itemInfo = Info.Concerts.find((item: any) => item.id === Number(id));
  }

  if (favorite) {
    if (!favorite.find((item: any) => item.id === Number(id))) {
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
