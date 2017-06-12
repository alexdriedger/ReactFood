import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    flex: 1,
    alignSelf: 'stretch',
    padding: 20,
  },
  image: {
    width: 72,
    height: 72,
    marginRight: 20,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  eventName: {
    fontSize: 24,
  },
  eventTime: {
    fontSize: 14,
  },
  eventLocation: {
    fontSize: 14,
  },
});

class EventRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={this.props.eventImage}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.eventName}>{this.props.eventName}</Text>
          <Text style={styles.eventTime}>Time</Text>
          <Text style={styles.eventLocation}>Location</Text>
        </View>
      </View>
    )
  }
}

export default EventRow;
