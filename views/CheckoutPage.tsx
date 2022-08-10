import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import {LogoComponent} from '../components';
import {Colors, Design, Fonts} from '../constants';
import {CheckoutNavProp} from '../types';
import {Routes} from '../routes';

export const CheckoutPage = ({navigation}: CheckoutNavProp) => {
  const {styles} = useStyle();
  const [emailText, onChangeEmailText] = React.useState('');
  const [nameText, onChangeNameText] = React.useState('');
  const [addressText, onChangeAddressText] = React.useState('');
  const [cityText, onChangeCityText] = React.useState('');
  const [stateText, onChangeStateText] = React.useState('');
  const [zipText, onChangeZipText] = React.useState('');

  const [paymentNameText, onChangePaymentNameText] = React.useState('');
  const [cardNumberText, onChangeCardNumberText] = React.useState('');
  const [expirationText, onChangeExpirationText] = React.useState('');
  const [cvcText, onChangeCvcText] = React.useState('');

  const onPressCheckout = () => {
    navigation.navigate(Routes.OrderCompleted);
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
            placeholder={'Email'}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>name</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeNameText}
            value={nameText}
            placeholder={'Full Name'}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>address</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeAddressText}
            value={addressText}
            placeholder={'Street Address'}
          />
        </View>
        <View style={styles.addressSection}>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>city</Text>
            <TextInput
              style={styles.cityInput}
              onChangeText={onChangeCityText}
              value={cityText}
              placeholder={'City'}
            />
          </View>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>state</Text>
            <TextInput
              style={styles.stateInput}
              onChangeText={onChangeStateText}
              value={stateText}
              placeholder={'State'}
            />
          </View>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>zip</Text>
            <TextInput
              style={styles.zipInput}
              onChangeText={onChangeZipText}
              value={zipText}
              placeholder={'Zipcode'}
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
            placeholder={'Name on Card'}
          />
        </View>
        <View style={styles.shippingSection}>
          <Text style={styles.shippingTitle}>card number</Text>
          <TextInput
            style={styles.nameInput}
            onChangeText={onChangeCardNumberText}
            value={cardNumberText}
            placeholder={'Card Number'}
          />
        </View>
        <View style={styles.paymentSection}>
          <View style={styles.shippingSection}>
            <Text style={styles.shippingTitle}>expiration date</Text>
            <TextInput
              style={styles.expInput}
              onChangeText={onChangeExpirationText}
              value={expirationText}
              placeholder={'Exp. Date.'}
            />
          </View>
          <View style={styles.cvcSection}>
            <Text style={styles.shippingTitle}>cvc</Text>
            <TextInput
              style={styles.cvcInput}
              onChangeText={onChangeCvcText}
              value={cvcText}
              placeholder={'cvc'}
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

const useStyle = () => {
  const dimensions = useWindowDimensions();
  console.log('Logging dimensions', dimensions);

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
    lineView: {
      borderBottomColor: Colors.borderBottomColor,
      borderBottomWidth: Design.checkoutBorder,
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
      // width: screenWidth / 1.5,
      marginLeft: 20,
      marginTop: 10,
      flexDirection: 'column',
    },
    shippingSection: {
      marginBottom: 10,
    },
    shippingTitle: {
      fontSize: Fonts.shippingTitle,
      fontWeight: 'bold',
      marginBottom: 3,
      marginLeft: 3,
    },
    nameInput: {
      width: dimensions.width / 1.3,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    addressSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: dimensions.width / 1.3,
      marginBottom: 20,
    },
    cityInput: {
      width: dimensions.width / 3.5,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    stateInput: {
      width: dimensions.width / 6,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    zipInput: {
      width: dimensions.width / 5,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    expInput: {
      width: dimensions.width / 4,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    cvcInput: {
      width: dimensions.width / 6,
      borderWidth: Design.checkoutBorder,
      paddingLeft: 5,
      height: 30,
      borderColor: Colors.borderBottomColor,
      color: Colors.borderBottomColor,
    },
    paymentSection: {
      flexDirection: 'row',
      width: dimensions.width / 1.3,
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
      color: Colors.buttonTextColor,
      fontWeight: 'bold',
      fontSize: Fonts.buyFont,
    },
    bottomSection: {
      marginBottom: 50,
    },
    buyButton: {
      width: dimensions.width / 1.2,
      height: 50,
      backgroundColor: Colors.buyButtonBackgroundColor,
      borderRadius: Design.borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return {styles};
};
