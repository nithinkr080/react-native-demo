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

import {createStackNavigator} from '@react-navigation/stack';

const Login = () => {
  return (
    <View>
      <Text>Hi from Login</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Hi from SignUp</Text>
    </View>
  );
};

function AuthNavigatior() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="SignUp" component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

export default AuthNavigatior;
