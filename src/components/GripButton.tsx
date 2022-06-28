import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

//@ts-ignore
const GripButton = props => {
  const {option, selectGrip} = props;
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    if (active === false) {
      setActive(true);
      setSelected(true);
    } else {
      setActive(false);
      setSelected(false);
    }
    selectGrip();
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
    borderColor: '#a9a9a9',
    height: 50,
    width: 125,
    backgroundColor: '#ffffff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 4,
    borderWidth: 1,
  },
  activeButton: {
    borderColor: '#a9a9a9',
    height: 50,
    width: 125,
    backgroundColor: '#1C0732',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 4,
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
  },
  activeText: {
    color: '#ffffff',
  },
});

export default GripButton;
