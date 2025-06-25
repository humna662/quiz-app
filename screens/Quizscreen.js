import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import questionsData from '../data/questions.json';

const QuizScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleSelect = (questionId, selectedOption) => {
    if (selectedAnswers[questionId]) return;

    const question = questionsData.find(q => q.id === questionId);
    const isCorrect = question.answer === selectedOption;

    setSelectedAnswers(prev => ({ ...prev, [questionId]: selectedOption }));
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('Summary', {
      score,
      total: questionsData.length,
      selectedAnswers,
    });
  };

  const renderItem = ({ item }) => {
    const selected = selectedAnswers[item.id];

    return (
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{item.question}</Text>
        {item.options.map((option, index) => {
          const isSelected = selected === option;
          const isCorrect = option === item.answer;
          const showFeedback = !!selected;

          let optionStyle = styles.optionContainer;

          if (showFeedback) {
            if (isSelected && isCorrect) optionStyle = styles.correctOption;
            else if (isSelected && !isCorrect) optionStyle = styles.incorrectOption;
          }

          return (
            <TouchableOpacity
              key={index}
              style={optionStyle}
              onPress={() => handleSelect(item.id, option)}
              disabled={!!selected}
            >
              <View style={styles.tickCircle}>
                {isSelected && <Text style={styles.tickMark}>✓</Text>}
              </View>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={questionsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightpurple',
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 3,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
  },
  correctOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'purple',
    borderRadius: 8,
    marginBottom: 8,
  },
  incorrectOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFB3B3',
    borderRadius: 8,
    marginBottom: 8,
  },
  tickCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  tickMark: {
    fontSize: 14,
    color: '#444',
  },
  optionText: {
    fontSize: 16,
  },
  submitButton: {
    padding: 15,
    backgroundColor: 'purple',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
