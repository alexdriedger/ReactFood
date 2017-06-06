import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
} from 'react-native';

import EventList from './app/Components/EventList/EventList';

const dataSource = [
    { data: [ { name: 'john' }, { name: 'steve'} ], key: 'pizza' },
    { data: [ { name: 'elaine' }, { name: 'josh' }, { name: 'brit' } ], key: 'salad' }
]

class ReactFood extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
        <EventList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
  },
});

AppRegistry.registerComponent('ReactFood', () => ReactFood);
