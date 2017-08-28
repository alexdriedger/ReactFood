import React, { Component } from 'react';

import VisibleEventDetail from '../containers/VisibleEventDetail';

class EventDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });
  render() {
    console.log('screen navigation state: ', this.props.navigation.state);
    return (
      <VisibleEventDetail
        id={this.props.navigation.state.params.id}
      />
    );
  }
}

export default EventDetail;
