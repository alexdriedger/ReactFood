import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 72,
    height: 72,
    marginRight: 15,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  eventName: {
    fontSize: 16,
  },
  eventTime: {
    fontSize: 14,
  },
  eventLocation: {
    fontSize: 14,
  },
  starContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  star: {
    width: 24,
    height: 24,
  }
});

class EventRow extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={this.props.eventImage}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.eventName}>{this.props.eventName}</Text>
            <Text style={styles.eventTime}>Time</Text>
            <Text style={styles.eventLocation}>{this.props.eventLocation}</Text>
          </View>
          <View style={styles.starContainer}>
            <Image
              style={styles.star}
              source={require('../../assets/ic_star_border_black_24dp.png')}
            />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default EventRow;
