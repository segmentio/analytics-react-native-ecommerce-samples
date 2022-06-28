import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {setOption} from '../storage/options';

//@ts-ignore
const SizeButton = props => {
  const {option, selectDeck, active, selectActive} = props;
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handlePress = () => {
    if (active === false) {
      selectActive(true);
      setSelected(true);
      dispatch(setOption({name: 'size', option: option}));
    } else {
      selectActive(false);
      setSelected(false);
    }
    selectDeck();
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
    width: 75,
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
    width: 75,
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

export default SizeButton;
