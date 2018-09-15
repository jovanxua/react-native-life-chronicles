
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BlankScreen = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>
        {title}
      </Text>
    </View>
  );
};

BlankScreen.propTypes = {
  title: PropTypes.string,
};

BlankScreen.defaultProps = {
  title: '',
};

export { BlankScreen };
