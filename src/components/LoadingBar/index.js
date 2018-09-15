import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const LoadingBar = (props) => {
  const { size, color } = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size}
        color={color}
      />
    </View>
  );
};

LoadingBar.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

LoadingBar.defaultProps = {
  size: 'small',
  color: '#EEB843',
};

export { LoadingBar };
