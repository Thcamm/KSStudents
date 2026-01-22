import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  const handleHello = () => {
    Alert.alert("xin chào");
  };

  // Function for Step 6
  const handleGoodbye = () => {
    Alert.alert("tạm biệt");
  };

  return (
    <View style={styles.container}>
      <Button title="Show Hello" onPress={handleHello} />

      {/* Spacer */}
      <View style={{ height: 20 }} />

      {/* Button for Step 6 */}
      <Button title="Show Goodbye" onPress={handleGoodbye} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;