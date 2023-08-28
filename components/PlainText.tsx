import React from 'react';
import {Text, TextStyle, StyleSheet} from 'react-native';

interface PlainTextProps {
  ptext: string;
  textStyle?: TextStyle;
}

const PlainText: React.FC<PlainTextProps> = ({ptext, textStyle}) => {
  return <Text style={[styles.plainStyle, textStyle]}>{ptext}</Text>;
};

const styles = StyleSheet.create({
  plainStyle: {
    color: 'grey',
    fontSize: 16,
    // backgroundColor: "green",
    // width: "95%",
    // paddingHorizontal: 14,
    // paddingBottom: 20,
  },
});

export default PlainText;
