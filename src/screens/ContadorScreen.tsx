import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import FloatingActionButton from '../components/FloatingActionButton';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={style.container}>
      <Text style={style.title}>Contador: {contador}</Text>
      <FloatingActionButton
        title="+1"
        onPress={() => setContador(contador + 1)}
        position="bottomLeft"
      />
      <FloatingActionButton
        title="-1"
        onPress={() => setContador(contador - 1)}
        position="bottomRight"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ContadorScreen;
