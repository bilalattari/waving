import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerComponent from './DrawerComponent'
import LoginScreen from '../screens/login';
import SplashScreen from '../screens/splash';
import Home from '../screens/home';

const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
  },
  { headerMode: null },
);
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
  },
  { headerMode: null },
);
const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  { initialRouteName: 'Home', headerMode: null },
);

const MainDrawer = createDrawerNavigator(
  {
    MainTabs: AppStack,
  },
  {
    drawerBackgroundColor: '#fff',
    drawerWidth: '80%',
    contentComponent: ({ navigation }) => (
      <DrawerComponent navigation={navigation} />
    ),
  },
);


const App = createSwitchNavigator({
  Splash: {
    screen: SplashStack,
  },
  Auth: {
    screen: AuthStack,
  },
  App: {
    screen: MainDrawer,
  },
});

const Routes = createAppContainer(App);
export default Routes;
