import React from 'react';
import { TabNavigator } from 'react-navigation';

import AllEvents from '../screens/AllEvents';
import FavEvents from '../screens/FavEvents';

export const EventsTabs = TabNavigator({
  AllEvents:  {
    screen: AllEvents,
  },
  FavEvents: {
    screen: FavEvents,
  },
});
