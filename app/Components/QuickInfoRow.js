import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    paddingLeft: 16,
    fontSize: 16,
    color: 'black',
  },
});

class QuickInfoRow extends Component {
  render() {
    const {
      iconName,
      iconSize,
      text,
    } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name={iconName}
          size={iconSize}
          color={'black'}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

QuickInfoRow.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default QuickInfoRow;
