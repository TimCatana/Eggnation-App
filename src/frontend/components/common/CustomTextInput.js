import React, {useState, useRef} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = props => {
  const {
    value,
    onValueChange,
    placeholder,
    keyboardType,
    isPassword,
    maxLength,
    width,
    height,
    fontSize,
    textColor,
    marginBottom,
    disabled,
    isError,
    errorText,
    iconColor,
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
            borderColor: isError ? 'red' : isFocused ? 'pink' : 'gray',
            marginBottom: isError ? null : marginBottom,
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
          returnKeyType={'next'}
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
                color={iconColor ? iconColor : "#666"}
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
    borderWidth: hp('0.2%'),
    borderRadius: wp('0.5%'),
  },
  input: {
    flex: 7.5,
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
    color: 'red',
  },
});

export default CustomTextInput;
