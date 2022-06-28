import React, {useState} from 'react';
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
import SizeButton from '../components/SizeButton';
import GripButton from '../components/GripButton';
import QuantityButton from '../components/QuantityButton';
import {deckSizes, gripOptions} from '../data/productInfo';
import useQuantityHook from '../components/useQuantityHook';
import useGripHook from '../components/useGripHook';
import useDeckHook from '../components/useDeckHook';
import {useDispatch} from 'react-redux';
import {setProduct} from '../storage/product';
import {ProductInfo} from '../data/productInfo';
import {setOption} from '../storage/options';
const screenWidth = Dimensions.get('screen').width;

//@ts-ignore
const ProductPage = ({navigation, route}) => {
  const {count, setCount} = useQuantityHook();
  const {gripChoice, setGrip} = useGripHook();
  const {deckChoice, setDeck} = useDeckHook();
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  //@ts-ignore
  let products = [];

  let deckOptions = deckSizes.map((size, index) => {
    return (
      <SizeButton
        selectDeck={() => {
          setDeck(size);
        }}
        option={size}
        key={index}
        active={isActive}
        selectActive={setActive}
      />
    );
  });

  let gripChoices = gripOptions.map((option, index) => {
    return (
      <GripButton
        active={isActive}
        selectActive={setActive}
        selectGrip={() => {
          setGrip(option);
        }}
        option={option}
        key={index}
      />
    );
  });

  const addToCart = () => {
    if (deckChoice === 0) {
      Alert.alert('Please select a size');
    } else if (gripChoice === '') {
      Alert.alert('Please select a grip');
    } else if (count === 0) {
      Alert.alert('Please select a quantity');
    } else {
      let productInfo = {
        name: route.params.name,
        price: 60,
        category: 'Skate Decks',
        size: deckChoice,
        grip: gripChoice,
        quantity: count,
      };
      products.push(productInfo);
      //@ts-ignore
      dispatch(setProduct(products));
    }
    setDeck(0);
    setCount(0);
    setGrip('');
    setActive(false);
    dispatch(setOption({name: 'size', option: 0}));
  };

  const onPressBuy = () => {
    addToCart();
    if (products.length > 0) {
      navigation.navigate('Cart');
    }
  };
  return (
    <ScrollView>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={ProductInfo[route.params.name]} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.category}>Category: Skate Decks</Text>
          <Text style={styles.titleText}>{route.params.name}</Text>
          <Text>$60</Text>
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
              currentCount={count}
              isMinus={() => {
                setCount(count - 1);
              }}
              isPlus={() => {
                setCount(count + 1);
              }}
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
    backgroundColor: '#ffffff',
  },
  productContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  image: {
    height: 500,
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: '#ffffff',
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 10,
  },
  size: {
    fontSize: 11,
    marginLeft: 2,
  },
  optionContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
  lineView: {
    borderBottomColor: '#d3d3d3',
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
  cartButton: {
    width: screenWidth / 1.2,
    height: 50,
    backgroundColor: '#1C0732',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

export default ProductPage;
