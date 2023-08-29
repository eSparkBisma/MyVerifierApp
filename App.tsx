import React, {useState, Fragment} from 'react';
import FirstTimeScreen from './components/FirstTimeScreen';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import {StyleSheet, View} from 'react-native';

const App: React.FC = () => {
  const [showLoginScreen, setShowLoginScreen] = useState(false);
  const [showDashboard, setshowDashboard] = useState(false);

  const handleLoginPress = () => {
    setShowLoginScreen(true);
  };
  const handleSuccessfulLogin = () => {
    setshowDashboard(true);
  };

  return (
    <View style={{flex: 1}}>
      {showLoginScreen ? (
        showDashboard ? (
          <Dashboard />
        ) : (
          <LoginScreen onSuccessfulLogin={handleSuccessfulLogin} />
        )
      ) : (
        <FirstTimeScreen onLoginPress={handleLoginPress} />
      )}
    </View>
  );
};

export default App;
