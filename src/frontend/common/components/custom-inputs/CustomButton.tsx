import React, {FC} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
  label: string;
  onPress: () => void;
  buttonEnabledColor: string;
  buttonDisabledColor: string;
  width?: number | string;
  height?: number | string;
  textColor: string;
  fontSize: number;
  disabled: boolean;
  elevation?: number;
  marginBottom?: number;
}

const CustomButton: FC<Props> = props => {
  const {
    label,
    onPress,
    buttonEnabledColor,
    buttonDisabledColor,
    width,
    height,
    textColor,
    fontSize,
    disabled,
    elevation = hp('0.3%'),
    marginBottom,
  } = props;

  return (
    <Pressable
      style={[
        styles.button,
        {
          height: height,
          width: width,
          backgroundColor: disabled ? buttonDisabledColor : buttonEnabledColor,
          elevation: elevation,
          marginBottom: marginBottom,
        },
      ]}
      onPress={onPress}
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
