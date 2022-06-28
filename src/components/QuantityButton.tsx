import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

//@ts-ignore
const QuantityButton = props => {
  const {currentCount, isMinus, isPlus, isCheckout} = props;

  return (
    <View
      style={isCheckout ? styles.checkoutCounter : styles.quantityContainer}>
      <Button onPress={isPlus} title="+" />
      <Text>{currentCount}</Text>
      <Button onPress={isMinus} title="-" />
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#a9a9a9',
    borderWidth: 1,
  },
  checkoutCounter: {
    borderWidth: 0,
    flexDirection: 'row',
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuantityButton;
