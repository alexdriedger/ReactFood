import * as actions from './ActionTypes';

export function addEvents(events) {
  return { type: actions.ADD_EVENTS, events };
}

export function addEvent(event) {
  return { type: actions.ADD_EVENT, event };
}
