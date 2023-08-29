import React, {useEffect, useState} from 'react';
import FirstTimeScreen from './components/FirstTimeScreen';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import {SessionProvider} from './components/SessionContext'; // Import the SessionProvider
import {StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: React.FC = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showDashboard, setshowDashboard] = useState(false);

  const handleLoginPress = () => {
    setShowLoginScreen(true);
  };
  const handleSuccessfulLogin = () => {
    setshowDashboard(true);
  };
  const handleSignOut = () => {
    setshowDashboard(false);
  };

  async function loadSession() {
    try {
      const value = await AsyncStorage.getItem('@session');
      console.log('_____', value);

      if (value !== null) {
        setshowDashboard(true);
        // setshowDashboard(JSON.parse(value));
      }
    } catch (error) {
      console.error('Error loading session:', error);
    }
  }
  useEffect(() => {
    loadSession();
  }, []);

  return (
    <SessionProvider>
      {showLoginScreen ? (
        showDashboard ? (
          <Dashboard onSignout={handleSignOut} />
        ) : (
          <LoginScreen onSuccessfulLogin={handleSuccessfulLogin} />
        )
      ) : (
        <FirstTimeScreen onLoginPress={handleLoginPress} />
      )}
    </SessionProvider>
  );
};

export default App;
