import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

import QuickInfoRow from '../Components/QuickInfoRow';
import FacebookButton from '../Components/FacebookButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 200,
  },
  titleContainer: {
    flexDirection: 'row',
    borderColor: 'gainsboro',
    borderBottomWidth: 1,
  },
  dateContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 12,
    paddingLeft: 8,
    paddingBottom: 16,
  },
  headingContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 12,
  },
  monthText: {
    fontSize: 16,
    color: 'orangered',
    textAlign: 'center',
    fontWeight: '100',
  },
  dateText: {
    fontSize: 26,
    textAlign: 'center',
    color: 'black',
    fontWeight: '100',
  },
  eventName: {
    fontSize: 24,
    color: 'black',
  },
  eventOrganizer: {
    fontSize: 12,
    color: 'grey',
  },
  quickInfoContainer: {
    flexDirection: 'column',
    borderColor: 'gainsboro',
    borderBottomWidth: 1,
    padding: 8,
  },
  descriptionContainer: {
    padding: 8,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  descriptionText: {
    fontSize: 13,
    textAlign: 'justify',
    color: 'black',
  },
  seperator: {
    height: 12,
    backgroundColor: '#CED0CE',
  },
});

class EventDetail extends Component {
  openFBLink = (id) => {
    let url = 'fb://event/'.concat(id);
    Linking.openURL(url).catch(() => {
      url = 'https://www.facebook.com/events/'.concat(id);
      Linking.openURL(url).catch(() => console.log('Could not open facebook event'));
    });
  }
  render() {
    const {
      event,
    } = this.props;
    console.log(event);
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: event.image }}
        />
        <View style={styles.titleContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{moment(event.startTime).format('DD')}</Text>
            <Text style={styles.monthText}>{moment(event.startTime).format('MMM')}</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.eventName}>{event.eventName}</Text>
            <Text style={styles.eventOrganizer}>{event.organizerName}</Text>
          </View>
        </View>
        <View style={styles.quickInfoContainer}>
          <QuickInfoRow
            iconName={'access-time'}
            iconSize={30}
            topText={moment(event.startTime).format('ddd, MMM Do [at] h:mm a [-] ') + moment(event.endTime).format('h:mm a')}
            bottomText={moment(event.startTime).fromNow()}
          />
          <QuickInfoRow
            iconName={'location-on'}
            iconSize={30}
            topText={event.locationName}
            bottomText={event.address}
          />
        </View>
        <FacebookButton
          onPress={() => this.openFBLink(event.id)}
          text={'Event'}
        />
        <View
          style={styles.seperator}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{event.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

EventDetail.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    organizerName: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventDetail;
