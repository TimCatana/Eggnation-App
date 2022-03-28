import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {sendForgotPasswordEmailUC} from '../../../domain/sendForgotPasswordEmailUC';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

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
      </View>

      <Button
        title="Send Email"
        onPress={() => {
          sendForgotPasswordEmailUC(email);
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
  },
  text: {
    fontSize: 50,
  },
});

export default ForgotPasswordScreen;
