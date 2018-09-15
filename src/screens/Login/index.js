
import React, { PureComponent } from 'react';
import { ThemedContainer } from '../../components';
import LoginScreen from './loginScreen';
import logoGoogle from '../../assets/img/logo-google.png';
import logoFacebook from '../../assets/img/logo-facebook.png';
import logoPerson from '../../assets/img/logo-person.png';

class Login extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      availableLoginMethods: [
        {
          id: 'google',
          icon: logoGoogle,
          label: 'Login with Google',
          textColor: '#ffffff',
          bgColor: '#dd4b39',
        },
        {
          id: 'guest',
          icon: logoPerson,
          label: 'Login as Guest',
          textColor: '#ffffff',
          bgColor: '#4caf50',
        },
        {
          id: 'facebook',
          icon: logoFacebook,
          label: 'Login with Facebook',
          textColor: '#ffffff',
          bgColor: '#3B5998',
        },
      ],
    };
  }

  onLogin = (objLoginInfo) => {
    alert('Login Request', objLoginInfo);
  };

  render() {
    const { availableLoginMethods } = this.state;
    return (
      <ThemedContainer>
        <LoginScreen
          availableLoginMethods={availableLoginMethods}
          onLogin={this.onLogin}
        />
      </ThemedContainer>
    );
  }
}

export default Login;
