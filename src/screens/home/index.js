import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      {/* search bar */}
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>
        {/* button */}
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
