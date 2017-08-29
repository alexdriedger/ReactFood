import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { RootStack } from './nav/routers';
import rootReducer from './reducers/EventReducer';

// TODO : DELETE THIS
import * as actions from './actions/APIActions';

const middlewares = [thunkMiddleware];

if (__DEV__) {
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

// TODO : DISPATCH THESE AT CORRECT TIME/PLACE IN APP STRUCTURE
store.dispatch(actions.selectSchool(1));
store.dispatch(actions.fetchEvents(1));

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
