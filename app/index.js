import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import Analytics from 'mobile-center-analytics';
import Crashes from 'mobile-center-crashes';

import { RootStack } from './nav/routers';
import rootReducer from './reducers/EventReducer';
import SplashPage from './Components/Pages/SplashPage';
import { logTelemetry } from './common/Log';

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
  async componentDidMount() {
    // Turn analytics and crashes on in production
    await Analytics.setEnabled(!__DEV__);
    await Crashes.setEnabled(!__DEV__);

    logTelemetry('App.Open');
  }

  render() {
    if (!this.state.rehydrated) {
      return (
        <SplashPage />
      );
    }
    store.dispatch(actions.selectSchool(1));
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
