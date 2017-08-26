import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import EventRow from './EventRow/EventRow';

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
    backgroundColor: '#CED0CE',
  },
});

class EventList extends Component {
  renderSeparator = () => (
    <View style={styles.separator} />
  );
  // TODO : ONLY PASS NECESSARY PROPS TO EVENT ROW
  renderItem = item => (
    <View style={styles.items} >
      <EventRow
        onPress={() => this.props.onPress(item)}
        event={item.item}
      />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.events}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

EventList.propTypes = {
  onPress: PropTypes.func.isRequired,

  // Event Properties
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      eventName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      locationName: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default EventList;
