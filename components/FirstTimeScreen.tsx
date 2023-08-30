import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import PlainText from './PlainText';
import Heading from './Heading';
import AppImage from './AppImage';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FirstTimeScreenProps {
  onLoginPress?: () => void;
}

const FirstTimeScreen: React.FC<FirstTimeScreenProps> = ({onLoginPress}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.topcontainer}>
        <AppImage
          source={require('../images/image1.jpg')}
          width={400}
          height={290}
        />
        {/* <a href="https://lovepik.com/images/png-mobile.html">Mobile Png vectors by Lovepik.com</a> */}
      </View>

      <View style={styles.bottomcontainer}>
        <View style={styles.appname}>
          <AppImage
            source={require('../images/logo.png')}
            width={50}
            height={50}
          />
          {/* <a href='https://pngtree.com/freepng/warranty-shield-icon-symbol-validation-verified_6085640.html'>png image from pngtree.com/</a> */}
          <Text style={{fontWeight: '400', fontSize: 25, paddingTop: 7}}>
            {' '}
            My
          </Text>
          <Text style={{fontWeight: '800', fontSize: 25, paddingTop: 7}}>
            Verifier
          </Text>
        </View>
        <Heading heading="Get ready to have a verification ride" />
        <PlainText
          ptext="Simply pass your login credentials or sign up to
            experience a smooth verification and registration process respectively!"
          textStyle={{width: '95%', paddingHorizontal: 14, paddingBottom: 20}}
        />
        <Button
          buttontitle="Login"
          buttonStyle={{backgroundColor: '#1877F2'}}
          textStyle={{color: '#fff'}}
          onPress={onLoginPress}
        />
        <Button
          buttontitle="Register"
          buttonStyle={{backgroundColor: '#fff', borderWidth: 2, marginTop: 10}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'space-evenly',
  },

  topcontainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
  },

  bottomcontainer: {
    justifyContent: 'center',
    // backgroundColor: "yellow",
    alignItems: 'center',
    height: '50%',
  },

  appname: {
    flexDirection: 'row',
    // alignItems: "flex-start"
    justifyContent: 'flex-start',
    // backgroundColor:"pink",
    width: '93%',
  },
});

export default FirstTimeScreen;
