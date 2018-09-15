import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import logoLifeChronicles from '../../assets/img/logo-lifechronicles.png';
import styles from './styles';

const LoginScreen = (props) => {
  const { availableLoginMethods, onLogin } = props;
  return (
    <View style={styles.container}>
      <View style={styles.contTitle}>
        <Image
          style={styles.imgAppLogo}
          resizeMode="center"
          source={logoLifeChronicles}
        />
      </View>
      <View style={styles.contBody}>
        {
          availableLoginMethods.map(oMethod => (
            <View style={styles.contButton}>
              <Button
                style={[
                  styles.btnLoginMethod,
                  {
                    backgroundColor: oMethod.bgColor,
                  },
                ]}
                icon={oMethod.icon}
                mode="contained"
                dark
                raised
                onPress={() => onLogin()}
                color={oMethod.textColor}
              >
                {oMethod.label}
              </Button>
            </View>
          ))
        }
      </View>
      <View style={styles.contFooter}>
        <Text style={styles.txtFooter}>
          Xua Labs
        </Text>
      </View>

    </View>
  );
};

LoginScreen.propTypes = {
  availableLoginMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginScreen;
