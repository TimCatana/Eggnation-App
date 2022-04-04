import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton = props => {
  const {
    label,
    onPress,
    buttonEnabledColor,
    buttonDisabledColor,
    textColor,
    fontSize,
    disabled,
    ...rest
  } = props;

  return (
    <View
      style={[
        styles.button,
        {backgroundColor: disabled ? buttonDisabledColor : buttonEnabledColor},
        {...rest},
      ]}>
      <Pressable onPress={onPress} android_ripple disabled={disabled}>
        <Text style={[{fontSize: fontSize, color: textColor}]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  button: {
    borderRadius: wp('0.5%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
    elevation: hp('0.3%'),
  },
});

export default CustomButton;
