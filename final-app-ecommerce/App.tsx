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

import {
  createClient,
  AnalyticsProvider,
} from '@segment/analytics-react-native';

import { IdfaPlugin } from '@segment/analytics-react-native-plugin-idfa';
import { AdvertisingIdPlugin } from '@segment/analytics-react-native-plugin-advertising-id';

const segmentClient = createClient({
  writeKey: 'QKoI2cHIPlixGDB358Y3T86tVqpaBZK3',
  trackAppLifecycleEvents: true,
  collectDeviceId: true,
});

segmentClient.add({plugin: new IdfaPlugin()});
segmentClient.add({plugin: new AdvertisingIdPlugin()});
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <AnalyticsProvider client={segmentClient}>
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
    </AnalyticsProvider>
  );
};

export default App;
