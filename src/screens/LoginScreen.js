import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
// import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';
import SignupScreen from './SignupScreen';




const LoginScreen = ({navigation}) =>  {
  // const [userName, setUserName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const {login} = useContext(AuthContext);


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
          login(email, password)
        } }
      />

      {/* TODO - enable user to change password */}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* TODO - make button nicer */}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate('SignupScreen')}}>
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
   },
   text: {
     fontSize: 50,
   }
});

export default LoginScreen;
