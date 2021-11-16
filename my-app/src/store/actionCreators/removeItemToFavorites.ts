import { FavoriteAction, FavoriteActionTypes } from "../../types/favorite";

export const removeItemIntoFavorites = (
  id: string,
  Favorites: any
): FavoriteAction => {
  return {
    type: FavoriteActionTypes.REMOVE_FAVORITE,
    payload: Favorites.filter((item: any) => {
      return item.id !== Number(id);
    }),
  };
};
