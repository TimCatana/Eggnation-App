import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardType,
  ReturnKeyType,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_TEXT_ERROR, C_ICON_SETTINGS} from '../../../../constants/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface Props {
  value: string;
  onValueChange: (value: string) => void;
  isError: boolean;
  errorText: string;
  disabled: boolean;
  isPassword: boolean;
  placeholder: string;
  keyboardType: KeyboardType;
  maxLength: number;
  width: number | string;
  height: number | string;
  marginBottom?: number;
  fontSize: number;
  textColor: string;
  iconColor?: string;
  unfocusedBorderColor: string;
  focusedBorderColor: string;
  returnKeyType: ReturnKeyType;
}

const CustomTextInput: FC<Props> = props => {
  const {
    value,
    onValueChange,
    isError,
    errorText,
    disabled,
    isPassword,
    placeholder,
    keyboardType,
    maxLength,
    width,
    height,
    marginBottom,
    fontSize,
    textColor,
    iconColor,
    unfocusedBorderColor,
    focusedBorderColor,
    returnKeyType,
  } = props;

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(isPassword);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordView = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <View>
      <View
        style={[
          styles.textInput,
          {
            width: width,
            height: height,
            borderColor: isError
              ? C_TEXT_ERROR
              : isFocused
              ? focusedBorderColor
              : unfocusedBorderColor,
            marginBottom: isError ? 0 : marginBottom,
          },
        ]}>
        <TextInput
          value={value}
          onChangeText={onValueChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={[styles.input, {fontSize: fontSize, color: textColor}]}
          secureTextEntry={isSecureTextEntry}
          editable={!disabled}
          returnKeyType={returnKeyType}
          placeholderTextColor={textColor}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />

        {isPassword && (
          <View style={styles.icon}>
            <Pressable onPress={togglePasswordView} disabled={disabled}>
              <IonIcons
                name={isSecureTextEntry ? 'eye-off' : 'eye'}
                size={hp('3.1%')}
                color={iconColor ? iconColor : C_ICON_SETTINGS}
              />
            </Pressable>
          </View>
        )}
      </View>

      {isError && errorText ? (
        <Text style={[styles.errorText, {marginBottom: marginBottom}]}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: hp('0.32%'),
    borderRadius: wp('1.5%'),
  },
  input: {
    flex: 7.5, // To push any icon to the right
    paddingLeft: wp('1.5%'),
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: hp('1.5%'),
    color: C_TEXT_ERROR,
  },
});

export default CustomTextInput;
