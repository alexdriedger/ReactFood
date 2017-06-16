import React from 'react';
import { TabNavigator } from 'react-navigation';

import AllEvents from '../screens/AllEvents';
import FavEvents from '../screens/FavEvents';

export const EventsTabs = TabNavigator({
  AllEvents:  {
    screen: AllEvents,
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
