import React, {useState} from 'react';
import FirstTimeScreen from './components/FirstTimeScreen';
import LoginScreen from './components/LoginScreen';
import {View} from 'react-native';

const App: React.FC = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const handleLoginPress = () => {
    setShowLoginScreen(true);
  };

  return (
    <View>
      {showLoginScreen ? (
        <LoginScreen />
      ) : (
        <FirstTimeScreen onLoginPress={handleLoginPress} />
      )}
    </View>
  );
};

export default App;
