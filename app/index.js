import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { RootStack } from './nav/routers';
import rootReducer from './reducers/EventReducer';

// TODO : DELETE THIS
import * as actions from './actions/EventActions';

const store = createStore(rootReducer);
// console.log(store.getState());

const events = require('./mockData/jan_2017.json');
store.dispatch(actions.addEvents(events));
// console.log(store.getState());

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
