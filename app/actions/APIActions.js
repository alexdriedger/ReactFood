// TODO : INVESTIGATE MORE REPUTABLE BASE 64 LIB
import base64 from 'base-64';
import * as actions from './ActionTypes';

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
    // TODO : CREATE CONSTANT THAT IS API ENPOINT
    // TODO : CREATE CONSTANT THAT IS API VERSION NUMBER
    // TODO : CREATE CONSTANT THAT IS API UN AND PW
    return fetch(`https://fff-api-heroku.herokuapp.com/food/api/v1.0/schools/${school}/events`, {
      headers: {
        Authorization: 'Basic ' + base64.encode('free_food_app' + ':' + 'FreeFoodIsTheBest'),
      },
    })
    .then(response => response.json())
    .then(json => dispatch(receiveEvents(school, json)));
  };
}
