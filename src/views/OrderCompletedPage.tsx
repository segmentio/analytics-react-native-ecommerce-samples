import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {LogoComponent} from '../components';
import {Colors, Fonts, Design} from '../../constants';
import {OrderNavProp} from '../types';
const screenWidth = Dimensions.get('screen').width;

export const OrderCompletedPage = ({navigation}: OrderNavProp) => {
  const onPressHome = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={styles.page}>
      <LogoComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Order Completed!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.orderText}>
          Thank you for shopping with us! We have recieved your order and will
          begin processing it as soon as possible. Please check your email for
          further confirmation as well as detailed tracking information. Have a
          great day!
        </Text>
      </View>
      <View style={styles.bottomSection} />
      <View style={styles.buyOptionContainer}>
        <TouchableOpacity onPress={onPressHome} style={styles.homeButton}>
          <Text style={styles.buyText}>Return To Shop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  page: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: Fonts.titleFont,
    textAlign: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontSize: Fonts.orderCompletedFont,
    lineHeight: 22,
    textAlign: 'center',
  },
  buyOptionContainer: {
    alignItems: 'center',
  },
  buyText: {
    color: Colors.buttonTextColor,
    fontWeight: 'bold',
    fontSize: Fonts.buyFont,
    textAlign: 'center',
  },
  bottomSection: {
    marginBottom: 50,
  },
  homeButton: {
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: Colors.buyButtonBackgroundColor,
    borderRadius: Design.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
