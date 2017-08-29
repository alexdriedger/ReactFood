import { connect } from 'react-redux';

import EventList from '../Components/EventList';

const getCorrectProps = (state, id) => ({
  id: state.events.byId[id].id,
  eventName: state.events.byId[id].name,
  image: state.events.byId[id].cover.source,
  startTime: state.events.byId[id].start_time,
  locationName: state.events.byId[id].place.name,
});

// Check if events is empty
const mapStateToProps = state => {
  const { selectedSchool } = state;
  const {
    isFetching,
    lastUpdated,
    allIds,
  } = state.events || {
    isFetching: true,
  };

  // If there are events, map ids to events
  const events = (typeof allIds !== 'undefined' && allIds.length > 0)
    ? allIds.map(id => getCorrectProps(state, id))
    : [];

  return {
    selectedSchool,
    isFetching,
    lastUpdated,
    events,
  };

  // return {
  //   events: state.events.events.allIds.map(id => getCorrectProps(state, id)),
  // };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: (eventId, eventName) => {
    ownProps.navigation.navigate('EventDetail', { id: eventId, name: eventName });
  },
});

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);

export default VisibleEventList;
