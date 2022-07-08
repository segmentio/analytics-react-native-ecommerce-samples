import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export type QuantityButtonOptions = {
  currentCount: number;
  isCheckout: boolean;
};

export type QuantityButtonProps = QuantityButtonOptions & {
  onIncrease: () => void;
  onDecrease: () => void;
};

export const QuantityButton = ({
  currentCount,
  onIncrease,
  onDecrease,
  isCheckout,
}: QuantityButtonProps) => {
  return (
    <View
      style={isCheckout ? styles.checkoutCounter : styles.quantityContainer}>
      <Button onPress={onIncrease} title="+" />
      <Text>{currentCount}</Text>
      <Button onPress={onDecrease} title="-" />
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
