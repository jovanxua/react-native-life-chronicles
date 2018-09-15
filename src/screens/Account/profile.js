import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { ProfilePicture } from '../../components';
import ProfileForm from './form';

const UserProfile = () => {
  const staticImgSize = 70;
  const staticHeaderHeight = 100;
  const topToContentMargin = 10;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contHeader,
          { height: staticHeaderHeight },
        ]}
      />
      <View style={styles.contBody}>
        <View
          style={[
            styles.contInfoBox,
            { paddingTop: topToContentMargin + (staticImgSize / 2) },
          ]}
        >
          <Text style={styles.txtInfo}>
            Jovanni Auxilio
          </Text>
        </View>
        <View style={styles.contForm}>
          <ProfileForm />
        </View>
      </View>
      <View
        style={[
          styles.contPicture,
          {
            top: staticHeaderHeight - (staticImgSize / 2),
            height: staticImgSize,
          },
        ]}
      >
        <ProfilePicture size={staticImgSize} />
      </View>
    </View>
  );
};

export default UserProfile;
