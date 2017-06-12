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
    backgroundColor: 'purple',
    alignSelf: 'stretch',
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
  },
  items: {
    backgroundColor: 'blue',
    flex: 1,
  },
});

const dataSource = [
    { data: [ { name: 'john' }, { name: 'steve'} ], key: 'Squash' },
    { data: [ { name: 'elaine' }, { name: 'josh' }, { name: 'brit' } ], key: 'Pumpkin' },
    { data: [ { name: 'steeeeeeve' }, { name: 'Broo' }, { name: 'YEEEE' } ], key: 'Leaves' }
]

class EventList extends Component {
  renderItem = (item) => {
    return (
      <View style={styles.items}>
        <EventRow
          eventName={item.item.name}
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
