import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomTextInput from '../../../../../components/common/CustomTextInput'

const LoginForm = props => {
  const {email, handleEmailChange, password, handlePasswordChange} = props;

  // {value, onValueChange, placeholder, keyboardType, width, height}

  return (
    <>
      <Text style={styles.headingText}>LOGIN</Text>
      <CustomTextInput
        value={email}
        onValueChange={handleEmailChange}
        placeholder="email"
        keyboardType="email-address"
        width={'100%'}
        height={hp('5%')}
        isPassword={false}
        maxLength={100}
      />
      <CustomTextInput
        value={password}
        onValueChange={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        width={'100%'}
        height={hp('5%')}
        isPassword={true}
        maxLength={30}
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
