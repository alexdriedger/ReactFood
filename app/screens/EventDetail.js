import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

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
    justifyContent: 'flex-start',
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
    fontSize: 32,
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
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: item.cover.source}}
        />
        <View style={styles.titleContainer}>
          <View style={styles.dateContainer}>
            {/*  TODO : DATE PARSING*/}
            <Text style={styles.dateText}>25</Text>
            <Text style={styles.monthText}>Jan</Text>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventOrganizer}>{item.owner.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default EventDetail;
