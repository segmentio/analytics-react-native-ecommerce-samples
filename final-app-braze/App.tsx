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
import { Routes } from './routes';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Routes.Home} component={Home} />
          <Stack.Screen
            name={Routes.ProductPage}
            component={ProductPage}
            initialParams={{productName: ''}}
          />
          <Stack.Screen name={Routes.Cart} component={Cart} />
          <Stack.Screen name={Routes.Checkout} component={CheckoutPage} />
          <Stack.Screen name={Routes.OrderCompleted} component={OrderCompletedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
