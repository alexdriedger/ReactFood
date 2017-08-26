import React, { Component } from 'react';

import EventDetail from '../Components/EventDetail';

class VisibleEventDetail extends Component {
  constructor(props) {
    super(props);
    this.events = require('../mockData/jan_2017.json');

    this.event = this.events.filter(event => event.id === props.event.id);
    this.event = this.event[0];
    console.log('event is: ', this.event);

    this.event = Object.assign({}, {
      id: this.event.id,
      eventName: this.event.name,
      organizerName: this.event.owner.name,
      locationName: this.event.place.name,
      image: this.event.cover.source,
      startTime: this.event.start_time,
      endTime: this.event.end_time,
      description: this.event.description,
    });
    console.log('event is after object.assign: ', this.event);
  }

  render() {
    return (
      <EventDetail
        event={this.event}
      />
    );
  }
}

export default VisibleEventDetail;
