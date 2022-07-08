import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../constants';

type SizeButtonParams = {
  option: number;
};

type SizeButtonProps = SizeButtonParams & {selectDeckSize: () => void};
export const SizeButton = ({option, selectDeckSize}: SizeButtonProps) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
    selectDeckSize();
  };

  return (
    <TouchableOpacity
      style={selected ? styles.activeButton : styles.button}
      onPress={handlePress}>
      <Text style={selected ? styles.activeText : styles.text}>{option}</Text>
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
