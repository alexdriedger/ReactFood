import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
} from 'react-native';

const dataSource = [
    { data: [ { name: 'john' }, { name: 'steve'} ], key: 'pizza' },
    { data: [ { name: 'elaine' }, { name: 'josh' }, { name: 'brit' } ], key: 'salad' }
]

class ReactFood extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderItem = (item) => {
    return (
      <Text sytle={styles.items}>{item.item.name}</Text>
    )
  }
  renderHeader = (headerItem) => {
    return (
      <Text style={styles.header}>{headerItem.section.key}</Text>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the placeholder text</Text>
        {/* <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={(item )=> item.name}
        /> */}
        <Text>This is middle text</Text>
        <Text style={styles.items}>{this.testData}</Text>
        <Text style={styles.items}>This is below the data</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 24,
  },
  items: {
    fontSize: 16,
  },

});

AppRegistry.registerComponent('ReactFood', () => ReactFood);
