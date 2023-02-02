/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavConatiner from './src/navigations';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const [data, setData] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  // const getPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'get',
  //   })
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // };

  // console.log('data', data);

  // useEffect(() => {
  //   getPosts();
  // }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      {/* <StatusBar
       barStyle={isDarkMode ? 'light-content' : 'dark-content'}
     backgroundColor={backgroundStyle.backgroundColor}
     />
      <Text style={{...styles.text, color: 'red'}}>Hello</Text>
      <ScrollView>
        {data.map(item => {
          return <Text>{item?.title}</Text>;
        })}
      </ScrollView> */}
      <Text>hello</Text>
      <AppNavConatiner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text: {
    fontSize: 20,
  },
});

export default App;
