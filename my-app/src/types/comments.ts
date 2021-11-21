export interface CommentsState {
  comments: any;
}

export enum CommentsActionTypes {
  ADD_COMMENT = "ADD_COMMENT",
}

interface addCommentAction {
  type: CommentsActionTypes.ADD_COMMENT;
  payload: any[];
}

export type CommentsAction = addCommentAction;
