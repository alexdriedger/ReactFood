import PropTypes from 'prop-types';

// Adapted from https://github.com/react-community/react-navigation/issues/104
export const navigationType = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    state: PropTypes.shape({
      key: PropTypes.string.isRequired,
      routeName: PropTypes.string.isRequired,
      path: PropTypes.string,
      params: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export const eventRowType = PropTypes.shape({
  eventName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired,
});
