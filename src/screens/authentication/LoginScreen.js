import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
// import SocialButton from '../components/SocialButton'; // TODO - get this from the guys gitHub when I implement Google button

import {useDispatch} from 'react-redux'
import { login } from '../../redux/actions'

/**
 * The login screen used to login to eggNation account
 * @param navigation  
 */
const LoginScreen = ({navigation}) =>  {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>

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

      <FormButton
        buttonTitle="Login"
        onPress={() => {
          console.log("logging in!");
          dispatch(login(email, password));
        } }
      />

      {/* TODO - enable user to change password */}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* TODO - make button nicer */}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate('Signup')}}>
        <Text style={styles.navButtonText}>Create Account</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     color: '#000'
   },
   text: {
     fontSize: 50,
   }
});

export default LoginScreen;
