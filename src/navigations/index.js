import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigatior from './AuthNavigatior';
import HomeNavigatior from './HomeNavigatior';
import DrawerNavigator from './DrawerNavigatior';
const AppNavConatiner = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigatior />
      <HomeNavigatior /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavConatiner;
