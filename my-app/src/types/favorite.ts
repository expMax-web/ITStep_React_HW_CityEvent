export interface favoriteState {
  favorite: any[];
}

export enum FavoriteActionTypes {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
}

interface addFavoriteAction {
  type: FavoriteActionTypes.ADD_FAVORITE;
  payload: any[];
}

interface removeFavoriteAction {
  type: FavoriteActionTypes.REMOVE_FAVORITE;
  payload: any[];
}

export type FavoriteAction = addFavoriteAction | removeFavoriteAction;
