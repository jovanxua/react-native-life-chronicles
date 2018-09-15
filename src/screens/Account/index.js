import React, { Component } from 'react';
import { ThemedContainer, TabBarIcon } from '../../components';
import UserProfile from './profile';

class Account extends Component {
  static navigationOptions = {
    title: 'My Profile',
    tabBarColor: '#00796b',
    tabBarIcon: TabBarIcon('account'),
  };

  componentDidMount() {
    // get data from remote
  }

  render() {
    return (
      <ThemedContainer>
        <UserProfile />
      </ThemedContainer>
    );
  }
}

export default Account;
