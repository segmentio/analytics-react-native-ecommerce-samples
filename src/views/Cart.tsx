import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CartComponent from '../components/CartComponent';
import {useSelector} from 'react-redux';
import {RootState} from '../storage/configureStore';
import LogoComponent from '../components/LogoComponent';

//@ts-ignore
const Cart = ({navigation}) => {
  const {products} = useSelector((state: RootState) => state.product);
  let initialPrice: number = 0;
  let tax: number = 0;
  let totalPrice: string = '';
  let shipping: number = 14.99;
  let purchasePrice: number = 0;
  let estimatedTax: string = '';

  //@ts-ignore
  products.forEach(product => {
    let productPrice;
    //@ts-ignore
    if (product.grip === 'Jessup($5.00)') {
      //@ts-ignore
      productPrice = (product.price + 5) * product.quantity;
      //@ts-ignore
    } else if (product.grip === 'Mob($7.00)') {
      //@ts-ignore
      productPrice = (product.price + 7) * product.quantity;
    }

    //@ts-ignore
    initialPrice = initialPrice + productPrice;
    tax = initialPrice * 0.07;
    purchasePrice = initialPrice + tax + shipping;
    estimatedTax = tax.toFixed(2);
    totalPrice = purchasePrice.toFixed(2);
  });

  const onPressCheckout = () => {
    navigation.navigate('Checkout');
  };

  let cartCompenents = products.map((product, index) => {
    return <CartComponent {...product} key={index} />;
  });

  return (
    <ScrollView style={styles.page}>
      <LogoComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.cartContainer}>{cartCompenents}</View>
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
    backgroundColor: '#ffffff',
  },
  cartContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 23,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    width: 'auto',
    marginLeft: 20,
    marginBottom: 20,
  },
  lineView: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
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
    backgroundColor: '#52BD94',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
export default Cart;
