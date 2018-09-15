
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

class ThemedContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <View
        style={styles.container}
      >
        {children}
      </View>
    );
  }
}

export { ThemedContainer };
