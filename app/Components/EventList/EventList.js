import React, { Component } from 'react';
import {
  SectionList,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Button,
  FlatList,
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
  separator: {
    height: 12,
    backgroundColor: "#CED0CE",
  }
});

const data = require('../../mockData/month_1.json');

class EventList extends Component {
  renderSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  };
  renderItem = (item) => {
    return (
      <View style={styles.items} >
        {/* TODO : Pass navigation better */}
        <EventRow
          onPress={() => this.props.navigation.navigate('EventDetail', {...item})}
          event={item.item}
        />
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

export default EventList;
