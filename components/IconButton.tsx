import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import FA_icon from 'react-native-vector-icons/FontAwesome';
import AppImage from './AppImage';

interface IconButtonprops {
  // source:?
  onPress?: () => void;
  color?: string;
  source?: ImageSourcePropType;
  iconName?: string;
  buttonStyle?: ViewStyle;
}

const IconButton: React.FC<IconButtonprops> = ({
  onPress,
  source,
  iconName,
  buttonStyle,
  color,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      {source ? (
        <AppImage source={source} width={30} height={30} />
      ) : (
        <FA_icon name={iconName} size={30} color={color} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#f0f0f0',
  },
});

export default IconButton;
