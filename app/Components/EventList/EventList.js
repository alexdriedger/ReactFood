import React, { Component } from 'react';
import {
  SectionList,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
  },
});

const dataSource = [
    { data: [ { name: 'john' }, { name: 'steve'} ], key: 'Squash' },
    { data: [ { name: 'elaine' }, { name: 'josh' }, { name: 'brit' } ], key: 'Pumpkin' }
]

class EventList extends Component {
  renderItem = (item) => {
    return (
      <Text sytle={styles.items}>{item.item.name}</Text>
    )
  }
  renderHeader = (headerItem) => {
    return (
      <Text style={styles.header}>{headerItem.section.key}</Text>
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
