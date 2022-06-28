import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProductInfo} from '../data/productInfo';

const screenWidth = Dimensions.get('screen').width;

//@ts-ignore
const ProductCard = product => {
  const navigation = useNavigation();
  const onPress = () => {
    //@ts-ignore
    navigation.navigate('Product Page', {
      name: product.name,
      source: product.source,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={ProductInfo[product.name]} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{product.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 220,
    width: screenWidth / 2.7,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#1C0732',
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 175,
    width: screenWidth / 2.7,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 13,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
