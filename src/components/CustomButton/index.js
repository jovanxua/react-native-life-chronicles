import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomButton = (props) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress()}
    >
      <View style={styles.contLabel}>
        <Text style={styles.txtLabel}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

CustomButton.defaultProps = {
  title: '',
};

export { CustomButton };
