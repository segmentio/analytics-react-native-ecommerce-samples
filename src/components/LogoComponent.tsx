import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const LogoComponent = () => {
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
    width: screenWidth / 2,
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
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: 250,
    justifyContent: 'center',
    marginBottom: 20,
  },
});
export default LogoComponent;
