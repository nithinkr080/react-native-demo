import {createDrawerNavigator} from '@react-navigation/drawer';

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
import HomeNavigatior from './HomeNavigatior';

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigatior}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
