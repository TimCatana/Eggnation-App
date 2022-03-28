import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {registerUserUC} from '../../../domain/registerUserUC';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // TODO - need to add some form of front end text validation and disable the button until all text is valid

  return (
    <View style={styles.body}>
      <Text style={styles.text}>RegisterScreen</Text>
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
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="password"
          keyboardType="default"
          style={styles.textInput}
        />
      </View>
      <Button
        title="Register"
        onPress={() => {
          registerUserUC(email, password);
        }}
      />
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

export default RegisterScreen;
