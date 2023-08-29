import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

interface InputBoxProps {
  placeholder: string;
  isPassword?: boolean;
  keyboardType?: 'default' | 'email-address';
  onChangeText?: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  keyboardType = 'default',
  isPassword,
  onChangeText,
}) => {
  const [text, setText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false);

  const validateEmail = (email: string): string => {
    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(email)) {
      if (!email) {
        return '';
      } else if (!email.includes('@')) {
        return 'Email address must contain "@" symbol.';
      } else if (!email.includes('.')) {
        return 'Email address must contain "." symbol.';
      } else {
        return 'Please enter a valid email address.';
      }
    }

    return '';
  };

  const handleTextChange = (newText: string) => {
    setText(newText);
    if (keyboardType === 'email-address') {
      const validationError = validateEmail(newText);
      setErrorText(validationError);
    }
    if (onChangeText) {
      onChangeText(newText);
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
        style={[styles.input, errorText ? styles.invalidInput : null]}
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
      {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
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
  errorText: {color: 'red', fontSize: 12, marginTop: 4},
});

export default InputBox;
