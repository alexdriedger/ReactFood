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
import Icon from 'react-native-vector-icons/FontAwesome';

import QuickInfoRow from '../Components/QuickInfoRow';
import FacebookButton from '../Components/FacebookButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    lineHeight: 14,
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
    padding: 16,
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
  }
});

class EventDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
  });
  openFBLink = (id) => {
    const url = 'fb://event/'.concat(id);
    Linking.openURL(url);
  }
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: item.cover.source }}
        />
        <View style={styles.titleContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{moment(item.start_time).format('DD')}</Text>
            <Text style={styles.monthText}>{moment(item.start_time).format('MMM')}</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventOrganizer}>{item.owner.name}</Text>
          </View>
        </View>
        <View style={styles.quickInfoContainer}>
          <QuickInfoRow
            iconName={'access-time'}
            iconSize={30}
            text={moment(item.start_time).format('ddd, MMM Do [at] h:mm a [-] ') + moment(item.end_time).format('h:mm a')}
          />
          <QuickInfoRow
            iconName={'location-on'}
            iconSize={30}
            text={item.place.name}
          />
        </View>
        <FacebookButton
          onPress={() => this.openFBLink(item.id)}
          text={'Event'}
        />
        <View
          style={styles.seperator}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default EventDetail;
