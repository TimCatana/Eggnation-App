import React from 'react';
import {View, Pressable} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const TopLeftCornerIcon = props => {
  const {icon, onPress, iconSize, iconColor, viewStyle, iconStyle} = props;

  return (
    <View style={viewStyle}>
      <Pressable style={iconStyle} onPress={onPress}>
        <IconFeather color={iconColor} name={icon} size={iconSize} />
      </Pressable>
    </View>
  );
};

export default TopLeftCornerIcon;
