import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AllEvents from '../screens/AllEvents';
import FavEvents from '../screens/FavEvents';
import EventDetail from '../screens/EventDetail';

export const AllEventsStack = StackNavigator({
  AllEvents: {
    screen: AllEvents,
    navigationOptions: {
      title: 'UBC Feed Me',
    },
  },
  EventDetail: {
    screen: EventDetail,
    navigationOptions: {
      title: 'Event Detail Title',
    },
  },
});

export const EventsTabs = TabNavigator({
  AllEvents:  {
    screen: AllEventsStack,
    navigationOptions: {
      tabBarLabel: 'Upcoming Food',
    },
  },
  FavEvents: {
    screen: FavEvents,
    navigationOptions: {
        tabBarLabel: 'My Food',
    },
  },
});
