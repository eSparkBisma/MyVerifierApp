import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
  Image,
} from 'react-native';
import AppImage from './AppImage';

interface IconButtonprops {
  onPress?: () => void;
  source: ImageSourcePropType;
  buttonStyle?: ViewStyle;
}

const IconButton: React.FC<IconButtonprops> = ({
  onPress,
  source,
  buttonStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <AppImage source={source} width={30} height={30} />
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
