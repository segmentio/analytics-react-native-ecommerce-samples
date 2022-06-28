import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/views/Home';
import ProductPage from './src/views/ProductPage';
import Cart from './src/views/Cart';
import {Provider} from 'react-redux';
import {store} from './src/storage/configureStore';
import CheckoutPage from './src/views/CheckoutPage';
import OrderCompletedPage from './src/views/OrderCompletedPage';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product Page" component={ProductPage} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={CheckoutPage} />
          <Stack.Screen name="Order Completed" component={OrderCompletedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
