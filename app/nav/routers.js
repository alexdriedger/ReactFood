import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import AllEvents from '../screens/AllEvents';
import EventDetail from '../screens/EventDetail';

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#002145',
  },
  headerText: {
    color: 'white',
    alignSelf: 'center',
  },
  transparentHeader: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
  },
});

export const RootStack = StackNavigator({
  RootScreen: {
    screen: AllEvents,
    navigationOptions: {
      title: 'UBC Feed Me',
    },
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: {
      title: '',
      headerRight: <View />,
      headerStyle: styles.transparentHeader,
    },
  },
}, {
  navigationOptions: {
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerText,
  },
});
