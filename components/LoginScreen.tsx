import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AppImage from './AppImage';
import Heading from './Heading';
import PlainText from './PlainText';
import SubHeading from './SubHeading';
import Button from './Button';
import InputBox from './InputBox';
import IconButton from './IconButton';

interface LoginScreenProps {
  onSuccessfulLogin?: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({onSuccessfulLogin}) => {
  const [emailaddress, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [loginState, setLoginState] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'https://64e719afb0fd9648b78f596f.mockapi.io/users',
      );
      const responseData = await response.json();

      const user = responseData.find(
        (u: {emailaddress: string; password: string}) =>
          u.emailaddress === emailaddress && u.password === password,
      );

      if (user) {
        console.log(user);
        console.log('Login successful!');
        if (onSuccessfulLogin) {
          onSuccessfulLogin(); // Call the prop function when login is successful
          console.log('5555555555555555555');
        }
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.topcontainer}>
        <AppImage
          source={require('../images/logo.png')}
          width={90}
          height={90}
        />
      </View>

      <View style={styles.bottomcontainer}>
        <Heading heading="Login" />
        <PlainText
          ptext="Login to continue using the app"
          textStyle={{width: '95%', paddingHorizontal: 14, paddingBottom: 8}}
        />
        <SubHeading sub_heading="Email" />
        <InputBox
          placeholder="Enter your email"
          keyboardType="email-address"
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <SubHeading sub_heading="Password" />
        <InputBox
          placeholder="Enter password"
          isPassword={true}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <PlainText
          ptext="Forgot Password?"
          textStyle={{
            textAlign: 'right',
            width: '95%',
            paddingHorizontal: 14,
            paddingTop: 15,
            paddingBottom: 20,
            fontWeight: 'bold',
          }}
        />
        <Button
          buttontitle="Login"
          buttonStyle={{backgroundColor: '#1877F2'}}
          textStyle={{color: '#fff'}}
          onPress={handleLogin}
        />
        <PlainText
          ptext="Or login with"
          textStyle={{
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '95%',
          }}>
          <IconButton source={require('../images/fb-icon.png')} />
          <IconButton source={require('../images/google-icon.png')} />
          <IconButton source={require('../images/ios-icon.png')} />
        </View>

        <View
          style={{
            // backgroundColor: 'yellow',
            width: '59%',
            flexDirection: 'row',
            paddingTop: 20,
          }}>
          <PlainText
            ptext="Don't have an account?"
            textStyle={{fontWeight: 'bold', color: 'black'}}
          />
          <PlainText
            ptext=" Register"
            textStyle={{fontWeight: 'bold', color: '#1877F2'}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  topcontainer: {
    // marginTop:10,
    // width: "95%",
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  bottomcontainer: {
    width: '98%',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
});

export default LoginScreen;
