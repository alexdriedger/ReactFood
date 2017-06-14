import React, { Component } from 'react';
import {
  SectionList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import EventRow from '../EventRow/EventRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  headerContainer: {
    alignItems: 'center',
    padding: 15,
  },
  headerText: {
    fontSize: 34,
  },
  items: {
    flex: 1,
  },
});

const dataSource = require('../../mockData/months_jan_to_april_2016.json');

class EventList extends Component {
  renderItem = (item) => {
    return (
      <View style={styles.items}>
        <EventRow
          eventName={item.item.name}
          eventLocation={item.item.start_time}
          eventImage={require('../../assets/react-placeholder.png')}
        />
      </View>
    )
  }
  renderHeader = (headerItem) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{headerItem.section.key}</Text>
      </View>
    )
  }
  render() {
    var json = require('../../mockData/month_1.json');
    console.log(json);
    return (
      <View style={styles.container}>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={(item )=> item.name}
        />
      </View>
    );
  }
}

export default EventList;
