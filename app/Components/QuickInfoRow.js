import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

class QuickInfoRow extends Component {
  render() {
    const {
      iconName,
      iconSize,
      text,
    } = this.props;
    return (
      <View >
        <Icon
          name={iconName}
          size={iconSize}
          color={'black'}
        />
        <Text>{text}</Text>
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
