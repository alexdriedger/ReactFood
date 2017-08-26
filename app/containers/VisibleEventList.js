import React, { Component } from 'react';

import { navigationType } from '../common/PropTypes';
import EventList from '../Components/EventList';

class VisibleEventList extends Component {
  constructor(props) {
    super(props);
    this.events = require('../mockData/jan_2017.json');

    // TODO : USE SELECTOR
    this.events = this.events.map(event => ({
      id: event.id,
      eventName: event.name,
      image: event.cover.source,
      startTime: event.start_time,
      locationName: event.end_time,
    }));

    console.log(this.events);
  }

  // TODO : ON PRESS WITH EVENT ID
  _onPress = (event) => {
    this.props.navigation.navigate('EventDetail', { ...event });
  }

  render() {
    return (
      <EventList
        events={this.events}
        onPress={this._onPress}
      />
    );
  }
}

VisibleEventList.propTypes = {
  ...navigationType,
};

export default VisibleEventList;
