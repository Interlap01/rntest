/**
 * Builder's React Native test app.
 *
 * @format
 */

import { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text } from 'react-native';

function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>RNTest</Text>
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Tapped {count} times</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#182a4a',
  },
  title: { fontSize: 40, fontWeight: '700', color: '#ffffff' },
  button: {
    marginTop: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  buttonText: { fontSize: 18, fontWeight: '600', color: '#182a4a' },
});

export default App;
