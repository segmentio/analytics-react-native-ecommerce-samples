import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ProductInfo} from '../data/productInfo';
import {QuantityButton} from './QuantityButton';
import {useQuantity} from '../hooks';
import {Colors, Fonts} from '../constants';
import {useDispatch} from 'react-redux';
import {removeProduct} from '../storage/cart';
import {Product} from '../types';
const removeItemIcon = require('../assets/trash-can.png');

export const CartComponent = (product: Product) => {
  const {count, setCount} = useQuantity();

  const dispatch = useDispatch();

  let productPrice = product.price + product.grip.price;

  const onDecreaseQuantity = () => {
    if (count !== undefined) {
      if (count > 0) {
        setCount(currentCount => currentCount! - 1);
      }
    }
  };

  const onIncreaseQuantity = () => {
    if (count === undefined) {
      setCount(1);
    } else {
      //object possibly undefined according to compiler w/o `!`
      setCount(currentCount => currentCount! + 1);
    }
  };

  const handleDelete = () => {
    dispatch(removeProduct(product));
    setCount(0);
  };
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
      <View style={styles.bottomContainer}>
        <View style={styles.quantityContainer}>
          <QuantityButton
            style={styles.checkoutCounter}
            currentCount={product.quantity}
            onDecrease={onDecreaseQuantity}
            onIncrease={onIncreaseQuantity}
          />
          <TouchableOpacity onPress={handleDelete}>
            <Image style={styles.removeIcon} source={removeItemIcon} />
          </TouchableOpacity>
        </View>
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
  bottomContainer: {
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
  checkoutCounter: {
    borderWidth: 0,
    flexDirection: 'row',
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIcon: {
    height: 15,
    width: 15,
  },
  quantityContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
