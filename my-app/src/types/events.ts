export interface EventsState {
  events: any;
}

export enum EventsActionTypes {
  ADD_EVENT = "ADD_EVENT",
}

interface addEventAction {
  type: EventsActionTypes.ADD_EVENT;
  payload: any[];
}

export type EventAction = addEventAction;
