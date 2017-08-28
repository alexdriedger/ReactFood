import { combineReducers } from 'redux';
import * as actions from '../actions/ActionTypes';


function events(state = [], action) {
  switch (action.type) {
    case actions.ADD_EVENTS:
      return action.events;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  events,
});

export default rootReducer;
