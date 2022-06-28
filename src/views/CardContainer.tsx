import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductCard from '../components/ProductCard';
import {ProductInfo} from '../data/productInfo';

const CardContainer = () => {
  let productsArray = [];

  for (const product in ProductInfo) {
    productsArray.push(product);
  }

  let productCards = productsArray.map((product, index) => {
    return <ProductCard name={product} key={index} />;
  });

  return <View style={styles.cardView}>{productCards}</View>;
};

const styles = StyleSheet.create({
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default CardContainer;
