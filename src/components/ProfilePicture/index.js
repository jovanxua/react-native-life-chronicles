
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ProfilePicture = (props) => {
  const { size } = props;
  return (
    <View
      colors={['#c31432', '#240b36']}
      style={[
        styles.container,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <View
        style={[
          styles.contMargin,
          {
            height: size - 3,
            width: size - 3,
            borderRadius: size / 2,
          },
        ]}
      >
        {/* <Image
          resizeMode="contain"
          source={pp}
          style={[
            styles.imgStyle,
            {
              height: size - 5,
              width: size - 5,
              borderRadius: size / 2,
            },
          ]}
        /> */}
      </View>
    </View>
  );
};

ProfilePicture.propTypes = {
  size: PropTypes.number,
};

ProfilePicture.defaultProps = {
  size: 55,
};

export { ProfilePicture };
