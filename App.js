// App.js

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/splashscreen';
import QuizScreen from './screens/Quizscreen';
import SummaryScreen from './screens/summaryscreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  // Simulate a splash screen duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false); // After 2.5 seconds, hide the splash screen
    }, 2500);

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  return (
    <NavigationContainer>
      {isSplashVisible ? (
        <SplashScreen /> // Show splash screen for a short time
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Quiz" component={QuizScreen} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
