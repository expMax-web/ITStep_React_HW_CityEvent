import { CommentsAction, CommentsActionTypes } from "../../types/comments";

export const addComment = (
  data: any,
  type: string,
  id: string,
  events: any
): CommentsAction => {
  if (type === "movie") {
    events.Cinema.map((item: any) => {
      if (item.id === id) {
        item.comments = [...item.comments, data];
      }
    });
  }
  if (type === "perfomances") {
    events.Perfomances.map((item: any) => {
      if (item.id === id) {
        item.comments = [...item.comments, data];
      }
    });
  }
  if (type === "сoncerts") {
    events.Concerts.map((item: any) => {
      if (item.id === id) {
        item.comments = [...item.comments, data];
      }
    });
  }
  return {
    type: CommentsActionTypes.ADD_COMMENT,
    payload: events,
  };
};
