import React from 'react';
import useRegisterScreen from './useRegisterScreen';
import {View, StyleSheet} from 'react-native';
import RegisterScreenTopView from './components/top-view/RegisterScreenTopView';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RegisterScreenBottomView from './components/bottom-view/RegisterScreenBottomView';

const RegisterScreen = ({navigation}) => {
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
    handleRegisterClick,
  } = useRegisterScreen();

  // TODO - need to add some form of front end text validation and disable the button until all text is valid

  return (
    <View style={styles.body}>
      <RegisterScreenTopView
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
        handleRegisterClick={handleRegisterClick}
      />

      <RegisterScreenBottomView isLoading={isLoading} navigation={navigation} />
      {/* 
      <Text style={styles.text}>RegisterScreen</Text>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="email"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="password"
          keyboardType="default"
          style={styles.textInput}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="password"
          keyboardType="default"
          style={styles.textInput}
        />
      </View>
      <Button
        title="Register"
        disabled={isEmailError || isPasswordError || isConfirmPasswordError}
        onPress={() => {
          handleRegisterClick();
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    paddingBottom: hp('1.5%'),
  },
  form: {
    width: '75%',
    height: '50%',
  },
  text: {
    fontSize: 50,
  },
  textInput: {
    height: '25%',
    width: '100%',
  },
});

export default RegisterScreen;
