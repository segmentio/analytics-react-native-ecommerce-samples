import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from '../constants';

export const LogoComponent = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/Twilio—Segment—Horizontal—Green.png')}
      />
      <View style={styles.lineView} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    width: 250,
    resizeMode: 'contain',
    height: 125,
  },
  logoContainer: {
    width: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineView: {
    borderBottomColor: Colors.borderBottomColor,
    borderBottomWidth: 1,
    width: 275,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
