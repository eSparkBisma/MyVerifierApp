import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

interface InputBoxProps {
  placeholder: string;
}

const InputBox: React.FC<InputBoxProps> = ({placeholder}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#888888"
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    padding: 13,
    width: '90%',
  },
});

export default InputBox;
