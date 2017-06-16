import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class EventDetail extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.id}</Text>
      </View>
    );
  }
}

export default EventDetail;
