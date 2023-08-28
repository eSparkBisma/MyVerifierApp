import React, {useState, Fragment} from 'react';
import FirstTimeScreen from './components/FirstTimeScreen';
import LoginScreen from './components/LoginScreen';
import {StyleSheet, View} from 'react-native';

const App: React.FC = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const handleLoginPress = () => {
    setShowLoginScreen(true);
  };

  return (
    <View style={{flex: 1}}>
      {showLoginScreen ? (
        <LoginScreen />
      ) : (
        <FirstTimeScreen onLoginPress={handleLoginPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  trying: {
    margin: 0,
    padding: 0,
  },
});

export default App;
