import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { navigationType } from '../common/PropTypes';
import EventList from '../Components/EventList';

const events = require('../mockData/jan_2017.json');

class VisibleEventList extends Component {
  // TODO : ON PRESS WITH EVENT ID
  _onPress = (event) => {
    console.log('event: ', event);
    this.props.navigation.navigate('EventDetail', { ...event });
  }

  render() {
    return (
      <EventList
        events={events}
        onPress={this._onPress}
      />
    );
  }
}

VisibleEventList.propTypes = {
  ...navigationType,
};

export default VisibleEventList;
