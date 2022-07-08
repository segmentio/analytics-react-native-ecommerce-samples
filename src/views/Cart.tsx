import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {CartComponent, LogoComponent} from '../components/';
import {useSelector} from 'react-redux';
import {RootState} from '../storage/configureStore';
import {Colors, Fonts, Design} from '../../constants';
import {shippingPrice} from '../data/productInfo';
import type {CartNavProp, Product} from '../types';

export const Cart = ({navigation}: CartNavProp) => {
  const {products} = useSelector((state: RootState) => state.product);
  let initialPrice: number = 0;
  let tax: number = 0;
  let totalPrice: string = '';
  let shipping: number = shippingPrice;
  let purchasePrice: number = 0;
  let estimatedTax: string = '';

  products.forEach((product: Product) => {
    if (product !== undefined) {
      let productPrice =
        (product.price + product.grip.price) * product.quantity;
      tax = productPrice * 0.07;
      purchasePrice = productPrice + tax + shipping;
      estimatedTax = tax.toFixed(2);
      totalPrice = purchasePrice.toFixed(2);
    }
  });

  const onPressCheckout = () => {
    navigation.navigate('Checkout');
  };

  let cartComponents = products.map((product: Product, index) => {
    return <CartComponent {...product} key={index} />;
  });

  return (
    <ScrollView style={styles.page}>
      <LogoComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.cartContainer}>{cartComponents}</View>
      <View style={styles.priceContainer}>
        <View style={styles.priceSection}>
          <Text style={styles.priceTitle}>Products: </Text>
          <Text> ${initialPrice}</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.priceTitle}>Estimated Tax: </Text>
          <Text> ${estimatedTax}</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.priceTitle}>Shipping: </Text>
          <Text> $14.99</Text>
        </View>
        <View style={styles.priceSection}>
          <Text style={styles.priceTitle}>Total: </Text>
          <Text> ${totalPrice}</Text>
        </View>
      </View>
      <View style={styles.buyOptionContainer}>
        <TouchableOpacity onPress={onPressCheckout} style={styles.buyButton}>
          <Text style={styles.buyText}>Checkout</Text>
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
  cartContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: Fonts.titleFont,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    width: 'auto',
    marginLeft: 20,
    marginBottom: 20,
  },
  lineView: {
    borderBottomColor: Colors.borderBottomColor,
    borderBottomWidth: Design.lineWidth,
    width: 250,
    marginBottom: 20,
    marginTop: 10,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    width: 350,
    height: 50,
    backgroundColor: Colors.buyButtonBackgroundColor,
    borderRadius: Design.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
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
  priceContainer: {
    flexDirection: 'column',
    width: 'auto',
    marginLeft: 20,
    marginBottom: 20,
  },
  priceTitle: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  priceSection: {
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'flex-end',
    marginRight: 40,
    marginTop: 5,
    marginBottom: 10,
  },
  bottomSection: {
    marginBottom: 50,
  },
});
