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
import SearchResultScreen from './src/screens/searchResults';
import DestinationSearchScreen from './src/screens/destinationSearch';
import GuestScreen from './src/screens/guests';

// components
import Post from './src/components/post';

// data
import feed from './assets/data/feed';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
