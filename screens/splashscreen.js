// screens/SplashScreen.js

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Quiz');
    }, 2500); // Navigate to the quiz after 2.5 seconds

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Trivia Quiz!</Text>
      <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
