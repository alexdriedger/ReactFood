import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import * as Styles from '../../common/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.PRIMARY_COLOR,
  },
});

class SplashPage extends Component {
  render() {
    return (
      <View
        style={styles.container}
      />
    );
  }
}

export default SplashPage;
