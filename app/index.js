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
// console.log(store.getState());

const events = require('./mockData/free_food.json');
store.dispatch(actions.addEvents(events.events));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
