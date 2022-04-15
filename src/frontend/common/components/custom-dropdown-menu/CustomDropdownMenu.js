import React from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { C_TEXT_ERROR, C_ICON_SETTINGS } from '../../../theme/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

const CustomDropdownMenu = props => {
  const {
    value,
    width,
    height,
    fontSize,
    textColor,
    marginBottom,
    disabled,
    iconColor,
    borderColor,
    handleIconPress,
  } = props;

  return (
    <View>
      <View
        style={[
          styles.textInput,
          {
            width: width,
            height: height,
            borderColor: borderColor,
            marginBottom: marginBottom,
          },
        ]}>
        <TextInput
          editable={false}
          value={value}
          style={[styles.input, {fontSize: fontSize, color: textColor}]}
        />

        <View style={styles.icon}>
          <Pressable onPress={handleIconPress} disabled={disabled}>
            <IonIcons
              name={'chevron-down'}
              size={hp('3.1%')}
              color={iconColor ? iconColor : C_ICON_SETTINGS}
            />
          </Pressable>
        </View>
      </View>
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
    color: C_TEXT_ERROR,
  },
});

export default CustomDropdownMenu;
