import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LogoComponent from '../components/LogoComponent';

const screenWidth = Dimensions.get('screen').width;

//@ts-ignore
const CheckoutPage = ({navigation}) => {
  const [emailText, onChangeEmailText] = React.useState('Email');
  const [nameText, onChangeNameText] = React.useState('Full Name');
  const [addressText, onChangeAddressText] = React.useState('Street Address');
  const [cityText, onChangeCityText] = React.useState('City');
  const [stateText, onChangeStateText] = React.useState('State');
  const [zipText, onChangeZipText] = React.useState('Zipcode');

  const [paymentNameText, onChangePaymentNameText] =
    React.useState('Name on Card');
  const [cardNumberText, onChangeCardNumberText] =
    React.useState('Card Number');
  const [expirationText, onChangeExpirationText] = React.useState('Exp. Date.');
  const [cvcText, onChangeCvcText] = React.useState('cvc');

  const onPressCheckout = () => {
    navigation.navigate('Order Completed');
  };

  return (
    <ScrollView style={styles.page}>
      <LogoComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shipping</Text>
      </View>
      <View style={styles.shippingContainer}>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>email</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeEmailText}
            value={emailText}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>name</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeNameText}
            value={nameText}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>address</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeAddressText}
            value={addressText}
          />
        </View>
        <View style={styles.addressSection}>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>city</Text>
            <TextInput
              style={styles.cityInput}
              onChangeText={onChangeCityText}
              value={cityText}
            />
          </View>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>state</Text>
            <TextInput
              style={styles.stateInput}
              onChangeText={onChangeStateText}
              value={stateText}
            />
          </View>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>zip</Text>
            <TextInput
              style={styles.zipInput}
              onChangeText={onChangeZipText}
              value={zipText}
            />
          </View>
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Payment</Text>
      </View>
      <View style={styles.shippingContainer}>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>name</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangePaymentNameText}
            value={paymentNameText}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>card number</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeCardNumberText}
            value={cardNumberText}
          />
        </View>
        <View style={styles.paymentSection}>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>expiration date</Text>
            <TextInput
              style={styles.expInput}
              onChangeText={onChangeExpirationText}
              value={expirationText}
            />
          </View>
          <View style={styles.cvcSection}>
            <Text style={styles.shippingTitle}>cvc</Text>
            <TextInput
              style={styles.cvcInput}
              onChangeText={onChangeCvcText}
              value={cvcText}
            />
          </View>
        </View>
      </View>
      <View style={styles.buyOptionContainer}>
        <TouchableOpacity onPress={onPressCheckout} style={styles.buyButton}>
          <Text style={styles.buyText}>Place Order</Text>
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
  lineView: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    width: 250,
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  lineContainer: {
    flexDirection: 'column',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 20,
  },
  shippingContainer: {
    width: screenWidth / 1.5,
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'column',
  },
  shippingSection: {
    marginBottom: 10,
  },
  shippingTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 3,
  },
  nameInput: {
    width: screenWidth / 1.3,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  addressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth / 1.3,
    marginBottom: 20,
  },
  cityInput: {
    width: screenWidth / 3.5,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  stateInput: {
    width: screenWidth / 6,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  zipInput: {
    width: screenWidth / 5,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  expInput: {
    width: screenWidth / 4,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  cvcInput: {
    width: screenWidth / 6,
    borderWidth: 1,
    paddingLeft: 5,
    height: 30,
    borderColor: '#d3d3d3',
    color: '#d3d3d3',
  },
  paymentSection: {
    flexDirection: 'row',
    width: screenWidth / 1.3,
    marginBottom: 20,
  },
  cvcSection: {
    marginLeft: 10,
    marginBottom: 10,
  },
  buyOptionContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  buyText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  bottomSection: {
    marginBottom: 50,
  },
  buyButton: {
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: '#52BD94',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckoutPage;
