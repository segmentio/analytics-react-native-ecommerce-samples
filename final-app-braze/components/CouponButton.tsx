import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Braze from '@braze/react-native-sdk';

const coupon = require('../assets/coupons.png');

export const CouponButton = () => {
  const handlePress = () => {
    Braze.launchContentCards();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.button}>
        <Image 
            source={coupon}
            style={styles.image}>
        </Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    width: 20,
    height: 25,
    resizeMode: 'contain',
    marginRight: 10,
  }
});