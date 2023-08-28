import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import AppImage from './AppImage';
import SubHeading from './SubHeading';
import Button from './Button';

const Dashboard: React.FC = () => {
  return (
    <ImageBackground
      source={require('./images/bg-img.jpg')}
      style={styles.backgroundimage}>
      <View style={styles.overlay} />
      <Text style={styles.profile}>Profile</Text>
      <View style={styles.maincontainer}>
        <View style={styles.profiledetails}>
          <AppImage
            source={require('./images/dp.jpg')}
            width={115}
            height={115}
            style={styles.dp}
          />
          <Text style={styles.name}>John Corner</Text>
          <Text style={styles.phone}>335 664 5989</Text>
        </View>
        <View style={styles.dashboard}>
          <SubHeading
            sub_heading="Settings"
            textStyle={{color: '#192A56', fontSize: 18}}
          />
          <Button
            buttontitle="Sign Out"
            style={styles.buttonstyle}
            textStyle={{
              textAlign: 'left',
              color: 'rgba(25, 42, 86, 0.6)',
              fontSize: 18,
              fontWeight: '500',
            }}></Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(94,78,219,0.6)',
  },
  dp: {
    borderRadius: 55,
    borderColor: '#fff',
    borderWidth: 2,
  },
  profile: {
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 12,
    color: '#fff',
    paddingTop: 40,
    paddingBottom: 30,
    textAlign: 'center',
  },
  maincontainer: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
  },
  profiledetails: {
    marginTop: -50,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#192A56',
    paddingTop: 5,
    paddingBottom: 2,
  },
  phone: {
    color: 'grey',
  },
  dashboard: {
    width: '98%',
    alignItems: 'center',
  },
  buttonstyle: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '94%',
    padding: 14,
  },
});

export default Dashboard;
