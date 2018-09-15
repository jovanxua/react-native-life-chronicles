import {
  createSwitchNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from './screens/Login';
import Search from './screens/Search';
import MyStories from './screens/MyStories';
import Account from './screens/Account';
import AuthLoader from './screens/AuthLoader';

const MainScreenTabs = createMaterialBottomTabNavigator({
  Search,
  MyStories,
  Account,
},
{
  shifting: true,
  title: 'HELLO',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#333333',
    inactiveTintColor: '#dddddd',
  },
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoader,
    App: MainScreenTabs,
    Auth: Login,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default AppNavigator;
