import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
  // Function for Step 3
  const handleHello = () => {
    Alert.alert("xin chào");
  };

  return (
    <View style={styles.container}>
       {/* Button for Step 3 */}
      <Button title="Show Hello" onPress={handleHello} />
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