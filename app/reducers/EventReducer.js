import { combineReducers } from 'redux';
import * as actions from '../actions/ActionTypes';

function selectedSchool(state = {}, action) {
  switch (action.type) {
    case actions.SELECT_SCHOOL:
      return action.school;
    default:
      return state;
  }
}

function events(
  state = {
    isFetching: false,
    didInvalidate: false,
    byId: {},
    allIds: [],
  },
  action,
) {
  switch (action.type) {
    case actions.INVALIDATE_SCHOOL:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case actions.REQUEST_EVENTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case actions.RECEIVE_EVENTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        byId: action.events.byId,
        allIds: action.events.allIds,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  events,
  selectedSchool,
});

export default rootReducer;
