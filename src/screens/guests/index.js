import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const GuestScreen = () => {
  const [adult, setAdult] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
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
            <Pressable
              onPress={() => setAdult(adult + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20}}>+</Text>
            </Pressable>
          </View>
        </View>
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
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20}}>+</Text>
            </Pressable>
          </View>
        </View>
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
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{fontSize: 20}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          });
        }}
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Search</Text>
      </Pressable>
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
