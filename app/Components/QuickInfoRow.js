import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 16,
  },
  topText: {
    fontSize: 16,
    color: 'black',
  },
  bottomText: {
    fontSize: 14,
    color: 'grey',
  },
});

class QuickInfoRow extends Component {
  render() {
    const {
      iconName,
      iconSize,
      topText,
      bottomText,
      onPress,
    } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <Icon
            name={iconName}
            size={iconSize}
            color={'grey'}
          />
          <View style={styles.textContainer}>
            <Text style={styles.topText}>{topText}</Text>
            <Text style={styles.bottomText}>{bottomText}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

QuickInfoRow.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default QuickInfoRow;
