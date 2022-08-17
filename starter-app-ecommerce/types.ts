import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  'Segment Shop': undefined;
  'Skate Decks': {productName: string};
  Cart: undefined;
  Checkout: undefined;
  'Order Completed': undefined;
  CardContainer: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export type HomeNavProp = NativeStackScreenProps<RootStackParamList, 'Segment Shop'>;
export type HomeRouteProp = RouteProp<RootStackParamList, 'Segment Shop'>;

export type CardNavProp = NativeStackScreenProps<
  RootStackParamList,
  'CardContainer'
>;
export type CardRouteProp = RouteProp<RootStackParamList, 'CardContainer'>;
export type CardProps = CardNavProp & CardRouteProp;
export type ProductNavProp = NativeStackScreenProps<
  RootStackParamList,
  'Skate Decks'
>;
export type ProductRouteProp = RouteProp<RootStackParamList, 'Skate Decks'>;

export type ProductProps = ProductRouteProp & ProductNavProp;
export type HomeProps = HomeNavProp & HomeRouteProp;

export type CartNavProp = NativeStackScreenProps<RootStackParamList, 'Cart'>;
export type CartRouteProp = RouteProp<RootStackParamList, 'Cart'>;

export type CheckoutNavProp = NativeStackScreenProps<
  RootStackParamList,
  'Checkout'
>;
export type CheckoutRouteProp = RouteProp<RootStackParamList, 'Checkout'>;

export type OrderNavProp = NativeStackScreenProps<
  RootStackParamList,
  'Order Completed'
>;
export type OrderRouteProp = RouteProp<RootStackParamList, 'Order Completed'>;

export type Product = {
  name: string;
  price: number;
  category: string;
  size: number;
  grip: Grip;
  quantity: number;
  id: number;
};

export type ProductState = {products: Product[]};

export type Grip = {name: string; price: number};
