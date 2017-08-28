import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { RootStack } from './nav/routers';
import rootReducer from './reducers/EventReducer';

// TODO : DELETE THIS
import * as actions from './actions/EventActions';

const middlewares = [];

if (__DEV__) {
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

// TODO : REMOVE AND REPLACE WITH API CALL
const events = require('./mockData/free_food.json');
store.dispatch(actions.addEvents(events.events));

class App extends Component {
  render() {
    // TODO : USE BASE 64 INSTEAD OF BTOA
    // TODO : FIGURE OUT WHY FETCH IS UNDERLINED
    fetch('https://fff-api-heroku.herokuapp.com/food/api/v1.0/schools/1/events', {
      headers: {
        Authorization: 'Basic ' + btoa('free_food_app' + ':' + 'FreeFoodIsTheBest'),
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
