import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';




const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {register} = useContext(AuthContext);


  const createUser = () => {
    let goodToGo = true;

    let whitespaceChars = /\s/;
    let lowerCaseChars = /[a-z]/;
    let upperCaseChars = /[A-Z]/;
    let numberChars = /\d/;

    // TODO - for each error display a red UI label saying what the problem is 
    // TODO - probably do this via errorBooleans... which expose an error component tailored to the error (via props)

    if(userName === '' || email === '' || password === '' || confirmPassword === '') {
      console.log("please fill out all sections!");
      goodToGo = false;
      return; // no need to continue errors yet.
    }

    // TODO - check for username uniqueness

    if(password !== confirmPassword) {
      console.log("passwords must match!");
      goodToGo = false;
    }

    if(password.length < 8) {
      console.log("Password should be at least 8 characters long!");
      goodToGo = false;
    }

    if(whitespaceChars.test(password) === true) {
      console.log("Password must not contain whitespace");
      goodToGo = false;
    }

    if(lowerCaseChars.test(password) === false || upperCaseChars.test(password) === false || numberChars.test(password) === false) {
      console.log("Password must contain lowercase letters, uppercase letters and numbers");
      goodToGo = false;
    }

    if(goodToGo) {
      console.log("registering email!");
      register(userName, email, password); // TODO - need to check if this throws an error (specifically email already exists error)
    }
  }







  return (
    <View style={styles.body}>

      <FormInput
        labelValue={userName}
        onChangeText={(userUserName) => setUserName(userUserName)}
        placeholderText="User Name"
        // iconType="user"
        autoCapitalize="none" // Todo - probably capitalize first word
        autoCorrect={false}
      />

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        // iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        // iconType="lock"
        autoCorrect={false}
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        autoCorrect={false}
        secureTextEntry={true}
      />

      {/* TODO - probably add a "show password" button */}

      <FormButton
        buttonTitle="Create Account"
        onPress={createUser}
      />

      
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{''}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

    </View>
 );

 }

 // TODO - make page look nicer...
 const styles = StyleSheet.create({
   body: {
     backgroundColor: '#f9fafd',
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     padding: 20,
   },
   text: {
     fontFamily: 'Kufam-SemiBoldItalic',
     fontSize: 28,
     marginBottom: 10,
     color: '#051d5f',
   },
   navButton: {
     marginTop: 15,
   },
   navButtonText: {
     fontSize: 18,
     fontWeight: '500',
     color: '#2e64e5',
     fontFamily: 'Lato-Regular',
   },
   textPrivate: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     marginVertical: 35,
     justifyContent: 'center',
   },
   color_textPrivate: {
     fontSize: 13,
     fontWeight: '400',
     fontFamily: 'Lato-Regular',
     color: 'grey',
   },
 });

 
 export default SignupScreen;
