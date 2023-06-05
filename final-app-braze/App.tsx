import React from 'react';
import { Platform } from 'react-native';
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
  CountFlushPolicy,
} from '@segment/analytics-react-native';
import { BrazePlugin } from '@segment/analytics-react-native-plugin-braze';
import { IOS_WRITE_KEY, ANDROID_WRITE_KEY } from './write-key';

let writeKey = Platform.OS === 'ios' ? IOS_WRITE_KEY: ANDROID_WRITE_KEY

const segmentClient = createClient({
  writeKey: writeKey,
  trackAppLifecycleEvents: true,
  collectDeviceId: true,
  debug: true,
  flushPolicies: [
    new CountFlushPolicy(10),
  ],
})

segmentClient.add({plugin: new BrazePlugin()})

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
