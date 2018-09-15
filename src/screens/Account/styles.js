import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contHeader: {
    height: 100,
    // backgroundColor: 'red',
  },
  contBody: {
    flex: 1,
    // backgroundColor: 'blue',

  },
  contPicture: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  contInfoBox: {
    height: 100,
    alignItems: 'center',
  },
  contForm: {
    flex: 1,
    elevation: 2,
  },
  txtInfo: {
    color: '#6C728A',
  },
});

export default styles;
