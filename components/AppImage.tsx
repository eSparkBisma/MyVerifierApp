import React from 'react';
import {Image, ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';

interface ImageProps {
  source: ImageSourcePropType;
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
}

const AppImage: React.FC<ImageProps> = ({
  source,
  width,
  height,
  style,
  ...props
}) => {
  return (
    <Image
      source={source}
      style={[{width: width, height: height, resizeMode: 'contain'}, style]}
      {...props}
    />
  );
};

export default AppImage;
