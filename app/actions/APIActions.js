import * as actions from './ActionTypes';
import * as CONSTANTS from '../common/Constants';
import { logTelemetry } from '../common/Log';

export function selectSchool(school) {
  return {
    type: actions.SELECT_SCHOOL,
    school,
  };
}

export function invalidateSchool(school) {
  return {
    type: actions.INVALIDATE_SCHOOL,
    school,
  };
}

export function requestEvents(school) {
  return {
    type: actions.REQUEST_EVENTS,
    school,
  };
}

export function receiveEvents(school, json) {
  return {
    type: actions.RECEIVE_EVENTS,
    school,
    events: json.events.events,
    receivedAt: Date.now(),
  };
}

export function receiveEventsFailure(error) {
  return {
    type: actions.RECEIVE_EVENTS_FAILURE,
    err: error,
  };
}

export function fetchEvents(school) {
  return function (dispatch) {
    dispatch(requestEvents(school));
    return fetch(`${CONSTANTS.API_ENDPOINT}/${CONSTANTS.API_VERSION}/schools/${school}/events`, {
      headers: {
        ...CONSTANTS.API_AUTH_HEADER,
      },
    })
    .then(
      response => response.json(),
      (error) => {
        dispatch(receiveEventsFailure(error));
        logTelemetry('API.Events.Fail');
        throw error;
      },
    )
    .then(
      json => dispatch(receiveEvents(school, json)),
      () => {}, // API call failed, do not process events
    );
  };
}
