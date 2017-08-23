import React, { Component } from 'react';

import { RootStack } from './nav/routers';

class App extends Component {
  render() {
    // TODO : USE BASE 64 INSTEAD OF BTOA
    // TODO : FIGURE OUT WHY FETCH IS UNDERLINED
    fetch('https://fff-api-heroku.herokuapp.com/food/api/v1.0/schools/1/events', {
      headers: {
        Authorization: 'Basic ' + btoa('free_food_app' + ':' + 'FreeFoodIsTheBest'),
      },
    })
    .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    return (
      <RootStack />
    );
  }
}

export default App;
