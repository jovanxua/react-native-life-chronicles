
import React, { Component } from 'react';
import { Text } from 'react-native';
import { ThemedContainer, TabBarIcon } from '../../components';

class Search extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarColor: '#00796b',
    tabBarIcon: TabBarIcon('home'),
  };

  render() {
    return (
      <ThemedContainer>
        <Text>
          Profile!
        </Text>
      </ThemedContainer>
    );
  }
}

export default Search;
