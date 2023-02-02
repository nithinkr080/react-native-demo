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

const Contacts = () => {
  return (
    <View>
      <Text>Hi from contacts</Text>
    </View>
  );
};

const ContactDetails = () => {
  return (
    <View>
      <Text>Hi from ContactDetails</Text>
    </View>
  );
};

const CreateContact = () => {
  return (
    <View>
      <Text>Hi from CreateContact</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings</Text>
    </View>
  );
};

function HomeNavigatior() {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Details"
        component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name="Create Contact"
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default HomeNavigatior;
