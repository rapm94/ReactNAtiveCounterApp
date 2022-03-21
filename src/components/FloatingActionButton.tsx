import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
  position: 'bottomLeft' | 'bottomRight';
}

const FloatingActionButton = ({title, onPress, position}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        position === 'bottomLeft'
          ? style.buttonPositionBottomLeft
          : style.buttonPositionBottomRight
      }>
      <View style={style.button}>
        <Text style={style.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  buttonPositionBottomRight: {
    bottom: 15,
    position: 'absolute',
    right: 15,
  },
  buttonPositionBottomLeft: {
    bottom: 15,
    position: 'absolute',
    left: 15,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
  },
});

export default FloatingActionButton;
