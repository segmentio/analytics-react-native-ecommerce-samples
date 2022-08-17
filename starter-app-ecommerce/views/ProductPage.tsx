import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../storage/configureStore';
import {SizeButton, GripButton, QuantityButton} from '../components';
import {deckSizes, gripOptions} from '../data/productInfo';
import {useGrip, useDeck, useQuantity} from '../hooks';
import {useDispatch} from 'react-redux';
import {addProduct, updateCart} from '../storage/cart';
import {ProductInfo} from '../data/productInfo';
import {Colors, Fonts, Design, productConstants} from '../constants';
import {Product, ProductNavProp} from '../types';

const PRICE = '$60';
const screenWidth = Dimensions.get('screen').width;

export const ProductPage = ({navigation, route}: ProductNavProp) => {
  const {count, setCount} = useQuantity();
  const {gripChoice, setGrip} = useGrip();
  const {deckChoice, setDeck} = useDeck();
  const {products} = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    let trackProperties = {
      name: route.params.productName,
      price: productConstants.price,
      category: productConstants.category,
      brand: 'Red F'
    }

  })

  const deckOptions = deckSizes.map((size, index) => {
    let active;
    if (size === deckChoice) {
      active = true;
    } else {
      active = false;
    }
    return (
      <SizeButton
        setActive={() => {
          setDeck(size);
        }}
        option={size}
        key={index}
        active={active}
      />
    );
  });

  const gripChoices = gripOptions.map((option, index) => {
    let active;
    if (option === gripChoice) {
      active = true;
    } else {
      active = false;
    }
    return (
      <GripButton
        setActive={() => {
          setGrip(option);
        }}
        active={active}
        {...option}
        key={index}
      />
    );
  });

  const addToCart = () => {
    if (deckChoice === undefined) {
      Alert.alert('Please select a size');
    } else if (gripChoice === undefined) {
      Alert.alert('Please select a grip');
    } else if (count === undefined) {
      Alert.alert('Please select a quantity');
    } else {
      let product: Product = {
        name: route.params.productName,
        price: productConstants.price,
        category: productConstants.category,
        size: deckChoice,
        grip: {...gripChoice},
        quantity: count,
        id: Date.now(),
      };
      dispatch(addProduct(product));
      setCount(0);
      setGrip(undefined);
      setDeck(undefined);
    }
  };

  const onPressBuy = () => {
    addToCart();
    let id = Date.now();
    dispatch(updateCart(id));
    if (products !== undefined) {
      navigation.navigate('Cart');
    }
  };

  const onDecreaseQuantity = () => {
    setCount(currentCount => {
      if (currentCount === undefined) {
        return 0;
      }
      if (currentCount > 0) {
        return currentCount - 1;
      }
    });
  };

  const onIncreaseQuantity = () => {
    setCount(currentCount => {
      if (currentCount === undefined) {
        return 1;
      }
      return currentCount + 1;
    });
  };

  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={
              ProductInfo[route.params.productName as keyof typeof ProductInfo]
            }
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.category}>Category: Skate Decks</Text>
          <Text style={styles.titleText}>{route.params.productName}</Text>
          <Text>{PRICE}</Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.optionContainer}>
          <Text style={styles.size}>Size</Text>
          <View style={styles.buttonContainer}>{deckOptions}</View>
        </View>
        <View style={styles.sectionBreak} />
        <View style={styles.optionContainer}>
          <Text style={styles.size}>Grip</Text>
          <View style={styles.buttonContainer}>{gripChoices}</View>
        </View>
        <View style={styles.optionContainer}>
          <Text style={styles.size}>Quantity</Text>
          <View style={styles.quantitySection}>
            <QuantityButton
              currentCount={count || 0}
              onDecrease={onDecreaseQuantity}
              onIncrease={onIncreaseQuantity}
            />
          </View>
        </View>
        <View style={styles.sectionBreak} />
        <View style={styles.buyOptionContainer}>
          <TouchableOpacity style={styles.buyButton} onPress={onPressBuy}>
            <Text style={styles.buyText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={addToCart} style={styles.cartButton}>
            <Text style={styles.buyText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionBreak} />
        <View style={styles.sectionBreak} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  page: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  productContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.backgroundColor,
  },
  image: {
    height: 500,
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: Colors.backgroundColor,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  titleText: {
    marginTop: 5,
    fontSize: Fonts.titleFont,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: Fonts.categoryFont,
  },
  size: {
    fontSize: Fonts.sizeFont,
    marginLeft: 2,
  },
  optionContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
  lineView: {
    borderBottomColor: Colors.borderBottomColor,
    borderBottomWidth: 1,
    width: 'auto',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 'auto',
    flexWrap: 'wrap',
    marginRight: 10,
    marginLeft: 30,
    alignItems: 'center',
  },
  sectionBreak: {
    marginTop: 20,
  },
  quantitySection: {
    marginLeft: 40,
    justifyContent: 'center',
    marginTop: 15,
  },
  buyButton: {
    width: screenWidth / 1.2,
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
  cartButton: {
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: Colors.cartButtonBackgroundColor,
    borderRadius: Design.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
