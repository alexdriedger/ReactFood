import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
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
      title: 'Event Detail Title',
      headerRight: <View />,
    },
  },
}, {
  navigationOptions: {
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerText,
  },
});
