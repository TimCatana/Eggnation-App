import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput,  StyleSheet, Pressable} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
// import SocialButton from '../components/SocialButton'; // TODO - get this from the guys gitHub when I implement Google button
import Icon  from 'react-native-vector-icons/MaterialIcons';

import {useDispatch} from 'react-redux'
import { register } from '../../redux/actions'

const SignupScreen = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  
  /**
   * Creates a user with the given input.
   * Also Checks to make sure that the input is valid.
   * @importantNote This does NOT set the redux state, this simply creates the user which firebase somehow stores locally.
   *                The redux state is changed in the Routes screen. when auth changes, the subscriber in Routes sees that and fires 
   *                the callback which sets the user. 
   */
  const onCreateUser = () => {
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
      dispatch(register(userName, email, password)); // TODO - need to check if this throws an error (specifically email already exists error)
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.mainCard}>
        
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" color='white' style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            value={userName}
            placeholder="username"
            onChangeText={(userUserName) => setUserName(userUserName)}
            autoCapitalize="none" // Todo - probably capitalize first word
          />
        </View>
      
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" color='white' style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Email"
            onChangeText={(userEmail) => setEmail(userEmail)}
            keyboardType="email-address"
          />
        </View>
      
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" color='white' style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(userPassword) => setPassword(userPassword)}
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="mail-outline" color='white' style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            placeholder='Confirm'
            onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <Pressable 
          onPress={onCreateUser}
        > 
          <Text>Create Account</Text>
        </Pressable>
      



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

     



      

    </View>
 );

 }

 // TODO - make page look nicer...
 const styles = StyleSheet.create({
   body: {
     flex: 1,
     backgroundColor: '#252238',
   },
   mainCard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '5%',
    marginTop: 150,
    marginBottom: 30,
    borderRadius: 17,
    // backgroundColor: "red",
    backgroundColor: "#2f2c43"
   },
   inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#3a374d',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
   }, 
   input: {
    color: 'white',
    flex: 1,
    // paddingLeft: bgfgf30,
    // borderBottomWidth: 1,
    // borderColor: 'green',
    // borderBottomWidth: 0.5,
    // fontSize: 18,
  },
  inputIcon: {
    marginTop: 15, 
    marginRight: 10,
    // position: 'absolute'
  },
   
   
  //  ,
  //  text: {
  //    fontFamily: 'Kufam-SemiBoldItalic',
  //    fontSize: 28,
  //    marginBottom: 10,
  //    color: '#051d5f',
  //  },
  //  navButton: {
  //    marginTop: 15,
  //  },
  //  navButtonText: {
  //    fontSize: 18,
  //    fontWeight: '500',
  //    color: '#2e64e5',
  //    fontFamily: 'Lato-Regular',
  //  },
  //  textPrivate: {
  //    flexDirection: 'row',
  //    flexWrap: 'wrap',
  //    marginVertical: 35,
  //    justifyContent: 'center',
  //  },
  //  color_textPrivate: {
  //    fontSize: 13,
  //    fontWeight: '400',
  //    fontFamily: 'Lato-Regular',
  //    color: 'grey',
  //  },
 });

 
 export default SignupScreen;
