import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import EventList from '../Components/EventList/EventList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class AllEvents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EventList />
      </View>
    );
  }
}

export default AllEvents;
