import {
  CommentsAction,
  CommentsActionTypes,
  CommentsState,
} from "../../types/comments";

const initialState: CommentsState = {
  comments: [],
};

export const commentsReducer = (
  state = initialState,
  action: CommentsAction
): CommentsState => {
  switch (action.type) {
    case CommentsActionTypes.ADD_COMMENT:
      return { comments: action.payload };
    default:
      return state;
  }
};
