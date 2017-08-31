import * as actions from './ActionTypes';
import * as CONSTANTS from '../common/Constants';

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

export function fetchEvents(school) {
  return function (dispatch) {
    dispatch(requestEvents(school));
    return fetch(`${CONSTANTS.API_ENDPOINT}/${CONSTANTS.API_VERSION}/schools/${school}/events`, {
      headers: {
        ...CONSTANTS.API_AUTH_HEADER,
      },
    })
    .then(response => response.json())
    .then(json => dispatch(receiveEvents(school, json)));
  };
}
