import { connect } from 'react-redux';

import EventDetail from '../Components/EventDetail';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  return {
    event: {
      id: state.events.byId[id].id,
      eventName: state.events.byId[id].name,
      organizerName: state.events.byId[id].name,
      locationName: state.events.byId[id].name,
      image: state.events.byId[id].cover.source,
      startTime: state.events.byId[id].start_time,
      endTime: state.events.byId[id].end_time,
      description: state.events.byId[id].description,
    },
  };
};

const VisibleEventDetail = connect(
  mapStateToProps,
)(EventDetail);

export default VisibleEventDetail;
