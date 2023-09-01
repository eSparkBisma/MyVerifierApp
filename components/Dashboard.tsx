import React, {useEffect, useState} from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import AppImage from './AppImage';
import SubHeading from './SubHeading';
import Button from './Button';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface DashboardProps {
  onSignout?: () => void;
}
const Dashboard: React.FC<DashboardProps> = ({onSignout}) => {
  const [userData, setUserData] = useState<{
    avatar: string;
    name: string;
    emailaddress: string;
  } | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await AsyncStorage.getItem('@session');
        if (data) {
          setUserData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <ImageBackground
      source={require('../images/bg-img.jpg')}
      style={styles.backgroundimage}>
      <View style={styles.overlay} />
      <Text style={styles.profile}>Profile</Text>
      <View style={styles.maincontainer}>
        {/* {isLoggedIn ? (
          <> */}
        <View style={styles.profiledetails}>
          {userData?.avatar && (
            <AppImage
              source={{uri: userData.avatar}}
              width={115}
              height={115}
              style={styles.dp}
            />
          )}
          <Text style={styles.name}>{userData?.name}</Text>
          <Text style={styles.phone}>{userData?.emailaddress}</Text>
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
              fontFamily: 'Montserrat-SemiBold',
              // fontWeight: '500',
            }}
            onPress={onSignout}></Button>
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
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    // fontWeight: '500',
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
    fontFamily: 'Montserrat-SemiBold',
    // fontWeight: '600',
    color: '#192A56',
    paddingTop: 5,
    paddingBottom: 2,
  },
  phone: {
    fontFamily: 'Montserrat-Regular',
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
