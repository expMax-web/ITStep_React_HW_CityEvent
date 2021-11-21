import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { eventsReducer } from "./eventsReducer";
import { favoriteReducer } from "./favoriteReducer";

export const rootReducer = combineReducers({
  favorite: favoriteReducer,
  events: eventsReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
