import { connect } from 'react-redux';

import EventList from '../Components/EventList';

const getCorrectProps = event => ({
  id: event.id,
  eventName: event.name,
  image: event.cover.source,
  startTime: event.start_time,
  locationName: event.place.name,
});

const mapStateToProps = state => ({
  events: state.events.map(event => getCorrectProps(event)),
});

// const _onPress = (event) => {
//   this.props.navigation.navigate('EventDetail', { ...event });
// };

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: (event) => {
    ownProps.navigation.navigate('EventDetail', { id: event.id, name: event.eventName });
  },
});

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);

export default VisibleEventList;

// class VisibleEventList extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.events = require('../mockData/jan_2017.json');

//   //   // TODO : USE SELECTOR
//   //   this.events = this.events.map(event => ({
//   //     id: event.id,
//   //     eventName: event.name,
//   //     image: event.cover.source,
//   //     startTime: event.start_time,
//   //     locationName: event.end_time,
//   //   }));

//   //   console.log(this.events);
//   // }

//   // TODO : ON PRESS WITH EVENT ID
//   _onPress = (event) => {
//     this.props.navigation.navigate('EventDetail', { ...event });
//   }

//   // render() {
//   //   return (
//   //     <EventList
//   //       events={this.events}
//   //       onPress={this._onPress}
//   //     />
//   //   );
//   // }
// }

// VisibleEventList.propTypes = {
//   ...navigationType,
// };

// export default VisibleEventList;
