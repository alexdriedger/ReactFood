import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import { RootStack } from './nav/routers';
import rootReducer from './reducers/EventReducer';
import SplashPage from './Components/Pages/SplashPage';

// TODO : DELETE THIS
import * as actions from './actions/APIActions';

const middlewares = [thunkMiddleware];

if (__DEV__) {
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(...middlewares),
    autoRehydrate(),
  ),
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rehydrated: false };
  }
  componentWillMount() {
    persistStore(store, { storage: AsyncStorage }, () => {
      this.setState({ rehydrated: true });
    });
  }
  componentDidMount() {
    // TODO : SELECT SCHOOL IN CORRECT PLACE
    store.dispatch(actions.selectSchool(1));
    // TODO : FETCH EVENTS FOR SCHOOL BASED ON STATE
    store.dispatch(actions.fetchEvents(1));
  }
  render() {
    if (!this.state.rehydrated) {
      return (
        <SplashPage />
      );
    }
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
