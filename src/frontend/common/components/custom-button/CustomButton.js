import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton = props => {
  const {
    label = "lol",
    onPress,
    buttonEnabledColor,
    buttonDisabledColor,
    textColor,
    fontSize,
    disabled,
    elevation = hp('0.3%'),
    ...rest
  } = props;

  return (
    <Pressable
      style={[
        styles.button,
        {
          backgroundColor: disabled ? buttonDisabledColor : buttonEnabledColor,
          elevation: elevation,
        },
        {...rest},
      ]}
      onPress={onPress}
      android_ripple
      disabled={disabled}>
      <Text style={[{fontSize: fontSize, color: textColor}]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: wp('0.5%'),
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1%'),
  },
});

export default CustomButton;
