import AsyncStorage from '@react-native-async-storage/async-storage';
import FA_icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
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

  const validateEmailAsync = async (email: string): Promise<string> => {
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

  const handleBlur = async () => {
    if (keyboardType === 'email-address') {
      const validationError = await validateEmailAsync(text);
      setErrorText(validationError);
    }
  };

  const handleTextChange = async (newText: string) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  const handlePasswordVisibility = () => {
    SetIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#888888"
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[
            styles.input,
            {fontFamily: 'Montserrat-Regular'},
            errorText ? styles.invalidInput : null,
          ]}
          onChangeText={handleTextChange}
          onBlur={handleBlur}
          value={text}
          keyboardType={keyboardType}
        />
        {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
      </View>

      {isPassword && (
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          style={styles.eyeButton}>
          <FA_icon
            name={isPasswordVisible ? 'eye' : 'eye-slash'}
            size={20}
            color={'grey'}
            style={{paddingTop: 2}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  errorText: {
    fontFamily: 'Montserrat-Regular',
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default InputBox;
