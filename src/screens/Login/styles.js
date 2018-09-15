import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contTitle: {
    flex: 0.5,
    paddingTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  contBody: {
    flex: 0.4,
    paddingTop: 40,
    backgroundColor: 'transparent',
  },
  contFooter: {
    flex: 0.1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contButton: {
    paddingTop: 20,
  },
  imgAppLogo: {
    flex: 1,
    width: '80%',
  },
  btnLoginMethod: {
    alignSelf: 'center',
    width: '80%',
    padding: 5,
    color: '#ffffff',
  },
  txtFooter: {
    color: '#b1b1b1',
  },
});

export default styles;
