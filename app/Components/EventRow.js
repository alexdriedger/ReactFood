import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  image: {
    height: 200,
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    height: 80,
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

  _renderEventImage = () => {
    const { image } = this.props.event;
    if (image === undefined) {
      return null;
    }
    return (
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
    );
  }

  render() {
    const { event } = this.props;
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={'transparent'}
      >
        <View style={styles.container}>
          {this._renderEventImage()}
          <View style={styles.infoContainer}>
            <View style={styles.dateContainer}>
              <Text
                style={styles.monthText}
              >{moment(event.startTime).format('MMM')}</Text>
              <Text
                style={styles.dateText}
              >{moment(event.startTime).format('DD')}</Text>
            </View>
            <View style={styles.textContainer} >
              <Text
                style={styles.eventName}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >{event.eventName}</Text>
              <Text
                style={styles.eventTime}
              >{moment(event.startTime).calendar()}</Text>
              <Text
                style={styles.eventLocation}
                numberOfLines={1}
                ellipsizeMode={'tail'}
              >{event.locationName}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

EventRow.propTypes = {
  onPress: PropTypes.func.isRequired,
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventRow;
