import { EventAction, EventsActionTypes } from "../../types/events";

export const addEvent = (data: any, type: string, events: any): EventAction => {
  if (type === "movie") {
    events.Cinema = [...events.Cinema, data];
  }
  if (type === "perfomances") {
    events.Perfomances = [...events.Perfomances, data];
  }
  if (type === "сoncerts") {
    events.Concerts = [...events.Concerts, data];
  }
  events.EventNum += 1;
  return {
    type: EventsActionTypes.ADD_EVENT,
    payload: events,
  };
};
