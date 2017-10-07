import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { logTelemetry } from '../common/Log';

import EventRow from './EventRow';

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
  componentDidMount() {
    this.props.refresh(this.props.schoolId);
    logTelemetry('EventList.Load');
  }

  /**
   * Called when the end of the list is reached
   */
  _onEndReached = () => {
    logTelemetry('EventList.End');
  }

  /**
   * Called to refresh list
   */
  _refresh = () => {
    this.props.refresh(this.props.schoolId);
    logTelemetry('EventList.Refresh');
  }

  /**
   * Called when a list item is pressed
   */
  _onEventPress = (event) => {
    this.props.onPress(event.item.id, event.item.eventName);
    logTelemetry('EventList.Click', {
      id: event.item.id,
      name: event.item.eventName,
    });
  }

  isRefreshing = () => {
    if (this.props.isFetching === true) {
      return true;
    }
    return false;
  }

  renderSeparator = () => (
    <View style={styles.separator} />
  );
  // TODO : ONLY PASS NECESSARY PROPS TO EVENT ROW
  renderItem = event => (
    <View style={styles.items} >
      <EventRow
        onPress={() => this._onEventPress(event)}
        event={event.item}
      />
    </View>
  );
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.events}
          renderItem={this.renderItem}
          keyExtractor={event => event.id}
          ItemSeparatorComponent={this.renderSeparator}
          onRefresh={this._refresh}
          refreshing={this.isRefreshing()}
          onEndReached={this._onEndReached}
        />
      </View>
    );
  }
}

EventList.propTypes = {
  onPress: PropTypes.func.isRequired,
  refresh: PropTypes.func.isRequired,

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

  isFetching: PropTypes.bool.isRequired,
  // Keeps throwing a PropType warning even though schoolId is a number
  schoolId: PropTypes.number.isRequired,
};

export default EventList;
