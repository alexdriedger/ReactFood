import { connect } from 'react-redux';
import moment from 'moment';

import EventList from '../Components/EventList';

const getCorrectProps = (state, id) => ({
  id: state.events.byId[id].id,
  eventName: state.events.byId[id].name,
  image: state.events.byId[id].cover.source,
  startTime: state.events.byId[id].start_time,
  locationName: state.events.byId[id].place.name,
});

/**
 * Checks if event is in the future
 * @param {*} state. Redux state
 * @param {string} id of the event
 */
const isFutureEvent = (state, id) => {
  const eventStartTime = moment(state.events.byId[id].start_time).valueOf();
  const currentTime = moment().unix();

  return eventStartTime > currentTime;
};

// TODO : USE SELECTOR TO IMPROVE PERFORMANCE
const getEventsAndSort = (state, allIds) => allIds
    // Filter out past events
    .filter(id => isFutureEvent(state, id))
    // Map ids of all events with details
    .map(id => getCorrectProps(state, id))
    // Sort events by date
    .sort((a, b) => moment(a.startTime).valueOf() - moment(b.startTime).valueOf());

const mapStateToProps = (state) => {
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
    ? getEventsAndSort(state, allIds)
    : [];

  return {
    selectedSchool,
    isFetching,
    lastUpdated,
    events,
  };
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
