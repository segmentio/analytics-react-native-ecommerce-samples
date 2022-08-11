import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export type QuantityButtonProps = {
  currentCount: number;
  onIncrease: () => void;
  onDecrease: () => void;
  style?: object;
};

export const QuantityButton = ({
  currentCount,
  onIncrease,
  onDecrease,
  style,
}: QuantityButtonProps) => {
  return (
    <View style={{...styles.quantityContainer, ...style}}>
      <Button onPress={onDecrease} title="-" />
      <Text>{currentCount}</Text>
      <Button onPress={onIncrease} title="+" />
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
