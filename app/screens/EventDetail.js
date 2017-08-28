import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VisibleEventDetail from '../containers/VisibleEventDetail';

class EventDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });
  render() {
    return (
      <VisibleEventDetail
        id={this.props.navigation.state.params.id}
      />
    );
  }
}

EventDetail.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    state: PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired,
      path: PropTypes.string,
      params: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default EventDetail;
