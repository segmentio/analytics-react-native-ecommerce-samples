import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ProductInfo} from '../data/productInfo';
import QuantityButton from './QuantityButton';
import useQuantityHook from '../components/useQuantityHook';

//@ts-ignore
const CartComponent = product => {
  const {count, setCount} = useQuantityHook();

  let productPrice = product.price;
  if (product.grip === 'Jessup($5.00)') {
    productPrice = (product.price + 5) * product.quantity;
  } else if (product.grip === 'Mob($7.00)') {
    productPrice = (product.price + 7) * product.quantity;
  }

  return (
    <TouchableOpacity style={styles.component}>
      <View style={styles.productContainer}>
        <View style={styles.imageView}>
          <Image style={styles.image} source={ProductInfo[product.name]} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <Text style={styles.productText}>Size: {product.size}</Text>
          <Text style={styles.productText}>Grip: {product.grip}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantityButton
          isCheckout={true}
          currentCount={product.quantity}
          isMinus={() => {
            setCount(count - 1);
          }}
          isPlus={() => {
            setCount(count + 1);
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
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 10,
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
    fontSize: 20,
    textAlign: 'right',
    marginBottom: 5,
  },
  lineView: {
    borderBottomColor: '#d3d3d3',
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

export default CartComponent;
