import { connect } from 'react-redux';

import EventList from '../Components/EventList';

const getCorrectProps = (state, id) => ({
  id: state.events.byId[id].id,
  eventName: state.events.byId[id].name,
  image: state.events.byId[id].cover.source,
  startTime: state.events.byId[id].start_time,
  locationName: state.events.byId[id].place.name,
});

const mapStateToProps = state => ({
  events: state.events.allIds.map(id => getCorrectProps(state, id)),
});

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
