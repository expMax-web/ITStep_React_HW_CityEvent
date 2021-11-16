import {
  FavoriteAction,
  FavoriteActionTypes,
  favoriteState,
} from "../../types/favorite";

const initialState: favoriteState = {
  favorite: [],
};

export const favoriteReducer = (
  state = initialState,
  action: FavoriteAction
): favoriteState => {
  switch (action.type) {
    case FavoriteActionTypes.ADD_FAVORITE:
      return { favorite: action.payload };
    case FavoriteActionTypes.REMOVE_FAVORITE:
      return { favorite: action.payload };
    default:
      return state;
  }
};
