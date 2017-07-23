import { TabNavigator, StackNavigator } from 'react-navigation';

import AllEvents from '../screens/AllEvents';
import FavEvents from '../screens/FavEvents';
import EventDetail from '../screens/EventDetail';

export const EventsTabs = TabNavigator({
  AllEvents: {
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

export const RootStack = StackNavigator({
  RootScreen: {
    screen: EventsTabs,
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
