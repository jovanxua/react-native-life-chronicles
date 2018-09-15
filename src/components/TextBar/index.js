import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const TextBar = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        { title }
      </Text>
    </View>
  );
};

TextBar.propTypes = {
  title: PropTypes.string,
};

TextBar.defaultProps = {
  title: '',
};

export { TextBar };
