/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// react native
import {StatusBar, SafeAreaView, Text, View} from 'react-native';

// routes
import Router from './src/navigations/router';

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
      {/* <View>
        <Text>Noice</Text>
      </View> */}
      {/* <StatusBar /> */}
      <Router />
    </>
  );
};

export default App;
