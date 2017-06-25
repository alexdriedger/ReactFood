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
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: 280,
  },
  image: {
    height: 200,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  dateText: {
    textAlign: 'center',
  },
  monthText: {
    textAlign: 'center',
    color: 'mediumvioletred',
  },
  textContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  eventName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 13,
  },
  eventLocation: {
    fontSize: 13,
  },
  starContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    marginRight: 12,
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
        underlayColor={'transparent'}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={this.props.eventImage}
          />
          <View style={styles.infoContainer}>
            <View style={styles.dateContainer}>
              {/*  TODO : USE ACTUAL DATE*/}
              <Text
                style={styles.monthText}
              >Jan</Text>
              {/*  TODO : USE ACTUAL DATE*/}
              <Text
                style={styles.dateText}>
              25</Text>
            </View>
            <View style={styles.textContainer} >
              <Text
                style={styles.eventName}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >{this.props.eventName}</Text>
              <Text
                style={styles.eventTime}
              >Time</Text>
              <Text
                style={styles.eventLocation}
              >{this.props.eventLocation}</Text>
            </View>
            <View style={styles.starContainer}>
              <Image
                style={styles.star}
                source={require('../../assets/ic_star_border_black_24dp.png')}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default EventRow;
