import React from 'react';
import {
  TouchableOpacity,
  Text,
  TextStyle,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  buttontitle: string;
  buttonStyle?: TextStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttontitle,
  buttonStyle,
  textStyle,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[buttonStyle, styles.ButtonStyle]}
      {...props}
      onPress={onPress}>
      <Text style={[{fontSize: 16, textAlign: 'center'}, textStyle]}>
        {buttontitle}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 25,
    width: '90%',
    padding: 14,
  },
});
