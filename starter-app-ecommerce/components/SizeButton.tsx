import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../constants';

type SizeButtonProps = {
  option: number;
  setActive: () => void;
  active: boolean;
};
export const SizeButton = ({option, setActive, active}: SizeButtonProps) => {
  const handlePress = () => {
    setActive();
  };

  return (
    <TouchableOpacity
      style={active ? styles.activeButton : styles.button}
      onPress={handlePress}>
      <Text style={active ? styles.activeText : styles.text}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.borderBottomColor,
    height: 50,
    width: 75,
    backgroundColor: Colors.backgroundColor,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 4,
    borderWidth: 1,
  },
  activeButton: {
    borderColor: Colors.borderBottomColor,
    height: 50,
    width: 75,
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
