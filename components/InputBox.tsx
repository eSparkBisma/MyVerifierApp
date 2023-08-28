import React, {useState} from 'react';
import {TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface InputBoxProps {
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: 'default' | 'email-address';
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  keyboardType = 'default',
  isPassword,
}) => {
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
    if (keyboardType === 'email-address') {
      setIsValid(validateEmail(newText));
    }
  };

  const handlePasswordVisibility = () => {
    SetIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888888"
        secureTextEntry={isPassword && !isPasswordVisible}
        style={[styles.input, !isValid && styles.invalidInput]}
        onChangeText={handleTextChange}
        value={text}
        keyboardType={keyboardType}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          style={styles.eyeButton}>
          <Image
            source={
              isPasswordVisible
                ? require('../images/hide.png')
                : require('../images/visible.png')
            }
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
    padding: 13,
    width: '90%',
  },
  invalidInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
  eyeButton: {
    position: 'absolute',
    right: '10%',
    top: '48%',
    transform: [{translateY: -12}],
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
});

export default InputBox;
