import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RegisterForm from './RegisterForm';
import RegisterButton from './RegisterButton';

interface Props {
  isLoading: boolean;
  email: string;
  handleEmailChange: (value: string) => void;
  isEmailError: boolean;
  password: string;
  handlePasswordChange: (value: string) => void;
  isPasswordError: boolean;
  confirmPassword: string;
  handleConfirmPasswordChange: (value: string) => void;
  isConfirmPasswordError: boolean;
  isSubbedToMailingList: boolean;
  handleIsSubbedToMailingListChange: () => void;
  handleEggnationShopLinkClick: () => void;
  handleRegisterClick: () => void;
}

const RegisterScreenCenterView: FC<Props> = props => {
  const {
    isLoading,
    email,
    handleEmailChange,
    isEmailError,
    password,
    handlePasswordChange,
    isPasswordError,
    confirmPassword,
    handleConfirmPasswordChange,
    isConfirmPasswordError,
    isSubbedToMailingList,
    handleIsSubbedToMailingListChange,
    handleEggnationShopLinkClick,
    handleRegisterClick,
  } = props;

  return (
    <View style={styles.body}>
      <View style={styles.formView}>
          <RegisterForm
            isLoading={isLoading}
            email={email}
            handleEmailChange={handleEmailChange}
            isEmailError={isEmailError}
            password={password}
            handlePasswordChange={handlePasswordChange}
            isPasswordError={isPasswordError}
            confirmPassword={confirmPassword}
            handleConfirmPasswordChange={handleConfirmPasswordChange}
            isConfirmPasswordError={isConfirmPasswordError}
            isSubbedToMailingList={isSubbedToMailingList}
            handleIsSubbedToMailingListChange={
              handleIsSubbedToMailingListChange
            }
            handleEggnationShopLinkClick={handleEggnationShopLinkClick}
          />

          <RegisterButton
            isLoading={isLoading}
            isEmailError={isEmailError}
            isPasswordError={isPasswordError}
            isConfirmPasswordError={isConfirmPasswordError}
            handleRegisterClick={handleRegisterClick}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 9,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: hp('6%'),
  },
  formView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('75%'),
  },
});

export default RegisterScreenCenterView;
