import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b5998',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 24,
    paddingRight: 24,
  },
});

class FacebookButton extends Component {
  render() {
    const {
      text,
      onPress,
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Icon
            name={'facebook-official'}
            size={30}
            color={'white'}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

FacebookButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

FacebookButton.defaultProps = {
  text: 'Facebook',
};

export default FacebookButton;
