import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Main() {
  const [count, setCount] = useState(0);

  function handleSum(): void {
    setCount(count + 1);
  }

  function handleSub(): void {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topCntainer}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={{...styles.buttom, backgroundColor: '#5D8CAE'}}
          onPress={() => handleSub()}>
          <Text style={styles.text}>Subtrair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.buttom, backgroundColor: '#1F4788'}}
          onPress={() => handleSum()}>
          <Text style={styles.text}>Somar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCntainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
    padding: 20,
  },
  buttom: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
