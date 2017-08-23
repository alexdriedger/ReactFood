import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';

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
    color: 'orangered',
  },
  textContainer: {
    flex: 7,
    justifyContent: 'center',
    marginRight: 16,
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
});

class EventRow extends Component {
  render() {
    const { event } = this.props;
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={'transparent'}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: event.cover.source}}
          />
          <View style={styles.infoContainer}>
            <View style={styles.dateContainer}>
              {/*  TODO : USE ACTUAL DATE*/}
              <Text
                style={styles.monthText}
              >{moment(event.start_time).format('MMM')}</Text>
              {/*  TODO : USE ACTUAL DATE*/}
              <Text
                style={styles.dateText}
              >{moment(event.start_time).format('DD')}</Text>
            </View>
            <View style={styles.textContainer} >
              <Text
                style={styles.eventName}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >{event.name}</Text>
              <Text
                style={styles.eventTime}
              >{moment(event.start_time).calendar()}</Text>
              <Text
                style={styles.eventLocation}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >{event.place.name}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
// TODO : PROP VALIDATION
export default EventRow;
