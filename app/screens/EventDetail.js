import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
  },
  titleContainer: {

  },
});

class EventDetail extends Component {
  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: item.cover.source}}
        />
        <View style={styles.titleContainer}>
          <Text>{item.name}</Text>
          <Text>{item.owner.name}</Text>
        </View>
      </View>
    );
  }
}

export default EventDetail;
