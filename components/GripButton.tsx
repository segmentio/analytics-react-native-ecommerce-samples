import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../constants';
import {Grip} from '../types';

export type GripButton = Grip & {active: boolean; setActive: () => void};

export const GripButton = ({name, price, active, setActive}: GripButton) => {
  const handlePress = () => {
    setActive();
  };

  return (
    <TouchableOpacity
      style={active ? styles.activeButton : styles.button}
      onPress={handlePress}>
      <Text style={active ? styles.activeText : styles.text}>
        {name} ${price}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.selectButtonActiveColor,
    height: 50,
    width: 125,
    backgroundColor: Colors.backgroundColor,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 4,
    borderWidth: 1,
  },
  activeButton: {
    borderColor: Colors.selectButtonBorderColor,
    height: 50,
    width: 125,
    backgroundColor: Colors.selectButtonActiveColor,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 4,
    borderWidth: 1,
  },
  text: {
    fontSize: Fonts.productFont,
  },
  activeText: {
    color: Colors.buttonTextColor,
  },
});
