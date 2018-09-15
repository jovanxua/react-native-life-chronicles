import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { LoadingScreen } from '../../components/LoadingScreen';

class AuthLoader extends Component {
  constructor() {
    super();
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const { navigation } = this.props;
    navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <LoadingScreen />
    );
  }
}

export default AuthLoader;
