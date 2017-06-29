import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import moment from 'moment';

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
  }
});

class EventDetail extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    const start = moment(item.start_time).format('MMM Do YY');
    console.log("render log");
    console.log(start);
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: item.cover.source}}
        />
        <View style={styles.titleContainer}>
          <View style={styles.dateContainer}>
            {/*  TODO : DATE PARSING*/}
            <Text style={styles.dateText}>{moment(item.start_time).format('DD')}</Text>
            <Text style={styles.monthText}>{moment(item.start_time).format('MMM')}</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventOrganizer}>{item.owner.name}</Text>
          </View>
        </View>
        <Text>{this.now}</Text>
      </View>
    );
  }
}

export default EventDetail;
