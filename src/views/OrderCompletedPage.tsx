import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import LogoComponent from '../components/LogoComponent';
const screenWidth = Dimensions.get('screen').width;

//@ts-ignore
const OrderCompletedPage = ({navigation}) => {
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 23,
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
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  buyOptionContainer: {
    alignItems: 'center',
  },
  buyText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  bottomSection: {
    marginBottom: 50,
  },
  homeButton: {
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: '#52BD94',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default OrderCompletedPage;
