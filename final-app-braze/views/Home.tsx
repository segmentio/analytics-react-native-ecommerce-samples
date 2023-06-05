import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {ProductData} from '../data/productInfo';
import {LogoComponent} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Fonts} from '../constants';
import {HomeNavProp} from '../types';
import {Routes} from '../routes';
import { useAnalytics } from '@segment/analytics-react-native';

const backgroundImage = require('../assets/seigaiha.png');


export type Item = {
  productName: string;
  source: any;
  id: number;
};

//@ts-ignore
const ProductCard = ({source, productName, onPress}) => (
  <View style={styles.productCard}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={source} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{productName}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const Header = () => {
  return (
    <View>
      <LogoComponent />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Shop Our Collection</Text>
      </View>
    </View>
  );
};

export const Home = ({navigation}: HomeNavProp) => {
  const {track} = useAnalytics();

  useEffect(() => {
    let trackProperties = {
      category: 'Skate Decks',
      products: ProductData,
    };

    track('Product List Viewed', trackProperties);
  });

  const onPress = (name: string) => {
    let productProperties ={
      brand: 'Red F',
      category: 'Skate Decks',
      name: name,
      price: 60,
    };

    navigation.navigate(Routes.ProductPage, {
      productName: name,
    });

    track('Product Clicked', productProperties);
  };

  //@ts-ignore
  const renderProductCard = ({item}) => {
    return <ProductCard {...item} onPress={() => onPress(item.productName)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="repeat">
        <FlatList
          data={ProductData}
          renderItem={renderProductCard}
          numColumns={2}
          ListHeaderComponent={Header}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productCard: {
    height: 220,
    flexDirection: 'column',
    alignItems: 'center',
    width: 150,
    margin: 10,
    borderRadius: 15,
    backgroundColor: Colors.productCardBackgroundColor,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 175,
    width: 150,
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
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: Fonts.titleFont,
    textAlign: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});