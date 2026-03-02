import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Square({ children, bgColor }) {
  return (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
      {children}
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.screen}>
      <Square bgColor="blue">
        <Text style={styles.text}>Square 1</Text>
      </Square>

      <Square bgColor="yellow">
        <Text style={styles.text}>Square 2</Text>
      </Square>

      <Square bgColor="red">
        <Text style={styles.text}>Square 3</Text>
      </Square>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: 150,
    height: 150,
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});