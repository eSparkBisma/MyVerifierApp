import React, {useEffect, useState} from 'react';
import FirstTimeScreen from './components/FirstTimeScreen';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import {StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: React.FC = () => {
  const [showFirstTimeScreen, setShowFirstTimeScreen] = useState(true);
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showDashboard, setshowDashboard] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);

  const handleLoginPress = () => {
    setShowLoginScreen(true);
  };
  const handleSuccessfulLogin = () => {
    setshowDashboard(true);
  };
  const handleSignOut = async () => {
    await AsyncStorage.removeItem('@session');
    setshowDashboard(false);
  };

  async function setAppOpenedFlag() {
    try {
      await AsyncStorage.setItem('@appOpened', 'true');
      setShowFirstTimeScreen(false);
    } catch (error) {
      console.error('Error setting app opened flag:', error);
    }
  }

  useEffect(() => {
    async function checkFirstTime() {
      try {
        const value = await AsyncStorage.getItem('@appOpened');
        console.log('Checking first time:', value);
        if (value) {
          setShowFirstTimeScreen(false);
          setShowLoginScreen(true);
        } else {
          setAppOpenedFlag().then(() => {
            setShowFirstTimeScreen(false);
            setCheckComplete(true);
          });
        }
      } catch (error) {
        console.error('Error checking first time:', error);
      }
    }
    checkFirstTime();
  }, []);

  useEffect(() => {
    async function loadSession() {
      try {
        const value = await AsyncStorage.getItem('@session');
        if (value !== null) {
          setshowDashboard(true);
        }
        setCheckComplete(true);
      } catch (error) {
        console.error('Error loading session:', error);
      }
    }

    loadSession();
  }, []);

  if (!checkComplete) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      {showLoginScreen ? (
        showDashboard ? (
          <>
            {console.log('Rendering Dashboard')}
            <Dashboard onSignout={handleSignOut} />
          </>
        ) : (
          <>
            {console.log('Rendering LoginScreen')}
            <LoginScreen onSuccessfulLogin={handleSuccessfulLogin} />
          </>
        )
      ) : (
        <>
          {console.log('Rendering FirstTimeScreen')}
          <FirstTimeScreen onLoginPress={handleLoginPress} />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
