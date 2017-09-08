import { connect } from 'react-redux';

import EventDetail from '../Components/EventDetail';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;

  // Set default values if location and/or image does not exist
  const {
    place: {
      name: locationName = 'Check Offical Event for Details',
      location: {
        street: address = 'Click FB Event button below',
      } = {},
    } = {},
    cover: {
      // TODO : HAVE DEFAULT EVENT IMAGE
      // TODO : CHECK WHAT HAPPENS IF AN EVENT DOESN'T HAVE A COVER PIC
      source: image = '',
    } = {},
  } = state.events.byId[id];

  return {
    event: {
      id: state.events.byId[id].id,
      eventName: state.events.byId[id].name,
      organizerName: state.events.byId[id].owner.name,
      locationName,
      address,
      image,
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
