import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';

const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />
      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed and 1 bedroom</Text>
      {/* Type & Desc */}
      <Text style={styles.description} numberOfLines={2}>
        Entire Flat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestiae, velit tempore labore suscipit, voluptatem qui ipsum deleniti
        vitae sed aliquid in eos corporis omnis. Facere, sed nesciunt?
        Veritatis, officia sed!
      </Text>
      {/* old price and new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}> $30</Text>/ text
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
