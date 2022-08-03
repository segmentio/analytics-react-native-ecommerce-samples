import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './storage/configureStore';
import {
  Home,
  ProductPage,
  Cart,
  CheckoutPage,
  OrderCompletedPage,
} from './views';
export const homeRoute = 'Home';
export const productPageRoute = 'Product Page';
export const cartRoute = 'Cart';
export const checkoutRoute = 'Checkout';
export const orderCompletedRoute = 'Order Completed';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={homeRoute} component={Home} />
          <Stack.Screen
            name={productPageRoute}
            component={ProductPage}
            initialParams={{productName: ''}}
          />
          <Stack.Screen name={cartRoute} component={Cart} />
          <Stack.Screen name={checkoutRoute} component={CheckoutPage} />
          <Stack.Screen name={orderCompletedRoute} component={OrderCompletedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
