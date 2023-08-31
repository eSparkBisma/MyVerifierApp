import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface HeadingText {
  heading: string;
}

const Heading: React.FC<HeadingText> = ({heading}) => {
  return <Text style={styles.headingStyle}>{heading}</Text>;
};

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    // fontWeight: 'bold',
    width: '95%',
    padding: 12,
    color: 'black',
    // backgroundColor:"yellow",
  },
});
export default Heading;
