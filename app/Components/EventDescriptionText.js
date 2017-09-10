import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  descriptionText: {
    fontSize: 13,
    textAlign: 'justify',
    color: 'black',
  },
  moreInfoText: {
    color: 'grey',
  },
});

class EventDescriptionText extends Component {
  constructor(props) {
    super(props);
    this.state = { fullText: false };
  }

  _getNumLines = () => this.state.fullText ? 0 : 12;

  _renderMoreInfoButton = () => {
    // Description has been expanded
    if (this.state.fullText) {
      return null;
    }

    return (
      <Text
        style={[styles.descriptionText, styles.moreInfoText]}
        onPress={() => this.setState({ fullText: true })}
      >See More</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <View>
          <Text
            style={styles.descriptionText}
            numberOfLines={this._getNumLines()}
            ellipsizeMode={'tail'}
          >{this.props.description}</Text>
          {this._renderMoreInfoButton()}
        </View>
      </View>
    );
  }
}

EventDescriptionText.propTypes = {
  description: PropTypes.string.isRequired,
};

export default EventDescriptionText;
