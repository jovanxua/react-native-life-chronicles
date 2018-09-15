
import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import styles from './styles';

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
);

export { LoadingScreen };
