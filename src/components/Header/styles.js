import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    elevation: 2,
  },
  containerNonHeaderMode: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    elevation: 2,
  },
  contBtn: {
    width: 45,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 7,
  },
  contBtnNonHeaderMode: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contCenter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
  centerNonHeaderMode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 25,
    fontFamily: 'Billabong',
  },
});

export default styles;
