import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  S_CPS_PAYPAL_EMAIL_TITLE,
  S_TI_EMAIL_ERROR_TEXT,
  S_TI_PAYPAL_EMAIL_PLACEHOLDER,
} from '../../../../../../constants/Strings';
import {
  C_FOCUSED_BORDER_COLOR,
  C_TEXT_LIGHT,
  C_UNFOCUSED_BORDER_COLOR,
} from '../../../../../../constants/Colors';
import {CustomTextInput} from '../../../../../common/components';

interface Props {
  isLoading: boolean;
  paypalEmail: string;
  isPaypalEmailError: boolean;
  handlePaypalEmailChange: (value: string) => void;
}

const CashTransferForm: FC<Props> = props => {
  const {isLoading, paypalEmail, handlePaypalEmailChange, isPaypalEmailError} =
    props;

  return (
    <>
      <Text style={styles.headingText}>{S_CPS_PAYPAL_EMAIL_TITLE}</Text>
      <CustomTextInput
        value={paypalEmail}
        onValueChange={handlePaypalEmailChange}
        placeholder={S_TI_PAYPAL_EMAIL_PLACEHOLDER}
        errorText={S_TI_EMAIL_ERROR_TEXT}
        isError={isPaypalEmailError && paypalEmail.length > 0}
        disabled={isLoading}
        maxLength={30}
        width={'100%'}
        height={hp('6.5%')}
        fontSize={hp('2%')}
        textColor={C_TEXT_LIGHT}
        unfocusedBorderColor={C_UNFOCUSED_BORDER_COLOR}
        focusedBorderColor={C_FOCUSED_BORDER_COLOR}
        keyboardType={'default'}
        returnKeyType={'done'}
        isPassword={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginBottom: hp('4%'),
    fontSize: hp('4%'),
    color: C_TEXT_LIGHT,
  },
});

export default CashTransferForm;
