import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/storage/configureStore';
import {
  Home,
  ProductPage,
  Cart,
  CheckoutPage,
  OrderCompletedPage,
} from './src/views/index';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="Product Page"
            component={ProductPage}
            initialParams={{productName: ''}}
          />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Checkout" component={CheckoutPage} />
          <Stack.Screen name="Order Completed" component={OrderCompletedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
