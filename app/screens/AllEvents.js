import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import VisibleEventList from '../containers/VisibleEventList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class AllEvents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <VisibleEventList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default AllEvents;
