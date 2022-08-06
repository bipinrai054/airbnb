import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/home';

import SearchResultScreen from '../screens/searchResults';
import SearchResultsTabNavigator from '../navigations/searchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigation;
