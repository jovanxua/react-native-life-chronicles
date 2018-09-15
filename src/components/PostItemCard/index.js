import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { Header } from '../Header';
import { ProfilePicture } from '../ProfilePicture';
import PropTypes from 'prop-types';
import styles from './styles';

const PostItemCard = (props) => {
  const { name, imgSource } = props;
  return (
    <View style={styles.container}>
      <Header
        headerMode={false}
        title=""
        leftHeader={[
          {
            type: 'custom',
            component: <ProfilePicture size={30} />,
          },
          {
            type: 'text',
            title: 'Hello :p',
          },
        ]}
        rightHeader={[
          {
            id: 'home_dots-vertical',
            type: 'button',
            iconName: 'dots-vertical',
          },
        ]}
      />
      <View style={styles.contImagePlaceholder}>
        {/* <Image
          source={pp}
          resizeMode="contain"
          style={styles.imgStyle}
        /> */}
      </View>
      <Header
        headerMode={false}
        title=""
        leftHeader={[
          {
            id: 'home_heart-outline',
            type: 'button',
            iconName: 'heart-outline',
          },
          {
            id: 'home_dots-vertical',
            type: 'button',
            iconName: 'dots-vertical',
          },
        ]}
        rightHeader={[
          {
            id: 'home_dots-vertical',
            type: 'button',
            iconName: 'dots-vertical',
          },
        ]}
      />
    </View>
  );
};

PostItemCard.propTypes = {
  name: PropTypes.string,
  imgUri: PropTypes.string,
};

PostItemCard.defaultProps = {
  name: '',
  imgUri: '',
};

export { PostItemCard };
