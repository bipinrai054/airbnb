/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView, Text, View} from 'react-native';

// screens
import HomeScreen from './src/screens/home';

// components
import Post from './src/components/post';

// data
import feed from './assets/data/feed';

const App = () => {
  console.log(feed[0]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
