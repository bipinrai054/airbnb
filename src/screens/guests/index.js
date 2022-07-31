import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const GuestScreen = () => {
  const [adult, setAdult] = React.useState(0);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: 'lightgrey',
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => setAdult(Math.max(0, adult - 1))}
            style={styles.button}>
            <Text style={{fontSize: 20}}>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adult}</Text>
          <Pressable onPress={() => setAdult(adult + 1)} style={styles.button}>
            <Text style={{fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
