import React, { Component } from 'react';

import VisibleEventDetail from '../containers/VisibleEventDetail';

class EventDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.eventName,
  });
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <VisibleEventDetail
        event={item}
      />
    );
  }
}

export default EventDetail;
