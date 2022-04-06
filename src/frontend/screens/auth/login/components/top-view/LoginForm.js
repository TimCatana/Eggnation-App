import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput'

const LoginForm = props => {
  const {email, handleEmailChange, isEmailError, password, handlePasswordChange, isPasswordError, isLoading} = props;
  
  return (
    <>
      <Text style={styles.headingText}>LOGIN</Text>
      <CustomTextInput
        value={email}
        onValueChange={handleEmailChange}
        placeholder="email"
        keyboardType="email-address"
        width={'100%'}
        height={hp('6%')}
        fontSize={ hp('2%')}
        isPassword={false}
        maxLength={100}
        marginBottom={hp("2%")}
        disabled={isLoading}
        returnKeyType={'next'}
        isError={isEmailError && email.length > 0}
        errorText={"please enter a valid email"}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        width={'100%'}
        height={hp('6%')}
        fontSize={ hp('2%')}
        isPassword={true}
        maxLength={30}
        marginBottom={hp("0.6%")}
        disabled={isLoading}
        returnKeyType={'done'}
        isError={false}
        errorText={""}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: hp('5%'),
    marginBottom: hp('2%'),
  }
});

export default LoginForm;
