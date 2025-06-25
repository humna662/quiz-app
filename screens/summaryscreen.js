// screens/SummaryScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SummaryScreen = ({ route, navigation }) => {
  const { score, total } = route.params;

  return (
    <View style={styles.container}>-
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.scoreText}>
        You got {score} out of {total} correct!
      </Text>
      <TouchableOpacity
        style={styles.retryButton}
        onPress={() => navigation.navigate('Quiz')}
      >
        <Text style={styles.retryButtonText}>Retake Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  scoreText: {
    fontSize: 20,
    marginTop: 20,
  },
  retryButton: {
    marginTop: 30,
    padding: 12,
    backgroundColor: 'black',
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
