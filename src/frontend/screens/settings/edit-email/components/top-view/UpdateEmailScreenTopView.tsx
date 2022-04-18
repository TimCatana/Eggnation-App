import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_TI_EMAIL_PLACEHOLDER,
  S_TI_EMAIL_KEYBOARD_TYPE,
  S_TI_EMAIL_ERROR_TEXT,
} from '../../../../../theme/Strings';
import {C_TEXT_INPUT_TEXT_LIGHT} from '../../../../../theme/Colors';
import CustomTextInput from '../../../../../common/components/custom-text-input/CustomTextInput';

interface Props {
  isLoading: boolean;
  newEmail: string;
  handleNewEmailChange: (value: string) => void;
  isNewEmailError: boolean;
}

const UpdateEmailScreenTopView: FC<Props> = props => {
  const {isLoading, newEmail, handleNewEmailChange, isNewEmailError} = props;

  return (
    <View style={styles.formView}>
      <CustomTextInput
        value={newEmail}
        onValueChange={handleNewEmailChange}
        isError={isNewEmailError && newEmail.length > 0}
        errorText={S_TI_EMAIL_ERROR_TEXT}
        disabled={isLoading}
        isPassword={false}
        placeholder={S_TI_EMAIL_PLACEHOLDER}
        keyboardType={S_TI_EMAIL_KEYBOARD_TYPE}
        maxLength={100}
        width={'100%'}
        height={hp('5.5%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_INPUT_TEXT_LIGHT}
        unfocusedBorderColor={'gray'}
        focusedBorderColor={'pink'}
        returnKeyType={'done'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default UpdateEmailScreenTopView;
