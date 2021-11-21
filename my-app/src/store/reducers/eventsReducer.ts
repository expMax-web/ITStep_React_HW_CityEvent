import { Info } from "../../pages/info/constInfo";
import {
  EventsState,
  EventsActionTypes,
  EventAction,
} from "../../types/events";

const initialState: EventsState = {
  events: Info,
};

export const eventsReducer = (
  state = initialState,
  action: EventAction
): EventsState => {
  switch (action.type) {
    case EventsActionTypes.ADD_EVENT:
      return { events: action.payload };
    default:
      return state;
  }
};
