import React from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';

interface SubHeadingText {
  sub_heading: string;
  textStyle?: TextStyle;
}

const SubHeading: React.FC<SubHeadingText> = ({sub_heading, textStyle}) => {
  return <Text style={[styles.subheadingstyle, textStyle]}>{sub_heading}</Text>;
};

const styles = StyleSheet.create({
  subheadingstyle: {
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    width: '95%',
    paddingHorizontal: 12,
    // color: 'black',
    paddingBottom: 10,
    paddingTop: 12,
    // backgroundColor:"yellow",
  },
});

export default SubHeading;
