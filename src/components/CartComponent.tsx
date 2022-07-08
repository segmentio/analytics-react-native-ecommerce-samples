import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ProductInfo} from '../data/productInfo';
import {QuantityButton} from './QuantityButton';
import useQuantityHook from '../components/useQuantityHook';
import {Colors, Fonts} from '../../constants';
import {Product} from '../types';

export const CartComponent = (product: Product) => {
  const {count, setCount} = useQuantityHook();

  let productPrice = product.price + product.grip.price;

  return (
    <TouchableOpacity style={styles.component}>
      <View style={styles.productContainer}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={ProductInfo[product.name as keyof typeof ProductInfo]}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productText}>Size: {product.size}</Text>
          <Text style={styles.productText}>Grip: {product.grip.name}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantityButton
          isCheckout={true}
          currentCount={product.quantity}
          onDecrease={() => {
            if (count !== undefined) {
              setCount(count - 1);
            }
          }}
          onIncrease={() => {
            if (count === undefined) {
              setCount(1);
            } else {
              setCount(count + 1);
            }
          }}
        />
        <Text style={styles.price}>${productPrice}</Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.lineView} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 75,
    width: 75,
    marginBottom: 10,
    justifyContent: 'flex-start',
  },
  imageView: {
    width: 55,
    marginBottom: 10,
    marginLeft: 10,
  },
  productContainer: {
    height: 75,
    marginBottom: 10,
    marginLeft: 10,
    flexDirection: 'row',
    width: 400,
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginLeft: 30,
    marginTop: 10,
    width: 230,
  },
  productText: {
    textAlign: 'right',
    fontSize: Fonts.cartProductFont,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productTitle: {
    fontSize: Fonts.cartProductFont,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
  },
  quantityContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  component: {
    width: 325,
    marginBottom: 40,
  },
  price: {
    fontSize: Fonts.cartPriceFont,
    textAlign: 'right',
    marginBottom: 5,
  },
  lineView: {
    borderBottomColor: Colors.borderBottomColor,
    borderBottomWidth: 1,
    width: 350,
    marginBottom: 20,
    marginTop: 10,
  },
  lineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
});
