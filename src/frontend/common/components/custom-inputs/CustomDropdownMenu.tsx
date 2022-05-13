import React, {FC} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_SETTINGS} from '../../../../constants/Colors';
import IonIcons from 'react-native-vector-icons/Ionicons';

interface Props {
  value: string;
  width: number | string;
  height: number | string;
  fontSize: number;
  textColor: string;
  marginBottom: number;
  disabled: boolean;
  iconColor?: string;
  borderColor: string;
  handleIconPress: () => void;
}

const CustomDropdownMenu: FC<Props> = props => {
  const {
    value,
    disabled,
    height,
    width,
    fontSize,
    textColor,
    marginBottom,
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
    borderWidth: hp('0.32%'),
    borderRadius: wp('1.5%'),
  },
  input: {
    flex: 7.5,
    paddingLeft: wp('1.5%'),
    paddingBottom: hp('1.5%')
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomDropdownMenu;
