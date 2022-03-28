import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  FORGOT_PASSWORD_SCREEN,
  REGISTER_SCREEN,
} from '../../util/NavigationConstants';
import FormInput from '../../components/common/FormInput';
import {loginUserUC} from '../../../domain/loginUserUC';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO - need to add some form of front end text validation and disable the button until all text is valid

  return (
    <View style={styles.body}>
      <Text style={styles.text}>LoginScreen</Text>
      <View style={styles.form}>
        <TextInput
          value={email}
          onChangeText={it => {
            setEmail(it);
          }}
          placeholder="email"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          keyboardType="default"
          style={styles.textInput}
        />
      </View>

      <Button
        title="Login"
        onPress={() => {
          loginUserUC(email, password);
        }}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate(FORGOT_PASSWORD_SCREEN);
        }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View>
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(REGISTER_SCREEN);
          }}>
          <Text style={styles.navButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
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

export default LoginScreen;
