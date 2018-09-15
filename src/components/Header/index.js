
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const Header = (props) => {
  const {
    title,
    onLeftPress,
    leftHeader,
    rightHeader,
    headerMode,
  } = props;

  const renderHeaderItem = aList => (
    aList.map(item => (
      <View key={item.id} style={headerMode ? styles.contBtn : styles.contBtnNonHeaderMode}>
        {
          item.type.toUpperCase() === 'CUSTOM'
            ? item.component
            : (
              <TouchableOpacity onPress={() => onLeftPress()}>
                <Icon name={item.iconName} size={26} color="#333333" />
              </TouchableOpacity>
            )
        }
      </View>
    ))
  );

  return (
    <View style={headerMode ? styles.container : styles.containerNonHeaderMode}>
      {renderHeaderItem(leftHeader)}
      <View style={styles.contCenter}>
        <Text style={styles.txtTitle}>
          {title || ''}
        </Text>
      </View>
      {renderHeaderItem(rightHeader)}
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  leftHeader: PropTypes.array,
  rightHeader: PropTypes.array,
  headerMode: PropTypes.bool,
};

Header.defaultProps = {
  leftHeader: [],
  rightHeader: [],
  headerMode: true,
};

export { Header };
