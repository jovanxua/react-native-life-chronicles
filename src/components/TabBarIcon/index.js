import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const TabBarIcon = name => ({ tintColor }) => (
  <Icon
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export { TabBarIcon };
