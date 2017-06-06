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
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderHeader}
          sections={dataSource}
          keyExtractor={(item )=> item.name}
        />
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
});

AppRegistry.registerComponent('ReactFood', () => ReactFood);
