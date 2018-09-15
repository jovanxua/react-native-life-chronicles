import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  contLeft: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  contRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  txtTitle: {
    fontSize: 11,
    color: '#adadad',
    fontWeight: '500',
    fontFamily: 'Open Sans',
  },

  imgStyle: {
    height: 281,
    width: '100%',
  },

  contImagePlaceholder: {
    flex: 0,
  },
});

export default styles;
