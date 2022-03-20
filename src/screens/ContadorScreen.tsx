import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
        }}>
        Contador: {contador}
      </Text>

        <Button
            title="Aumentar"
            onPress={() => setContador(contador + 1)}
        />
        <Button
            title="Disminuir"
            onPress={() => setContador(contador - 1)}
        />

    </View>
  );
};

export default ContadorScreen;
