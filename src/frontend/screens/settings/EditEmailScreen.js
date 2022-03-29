import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {updateUserEmailUC} from '../../../domain/updateUserEmailUC';

const EditEmailScreen = () => {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditEmailScreen</Text>
      <TextInput
        value={newEmail}
        onChangeText={setNewEmail}
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
      <Button
        title="change email"
        onPress={() => {
          updateUserEmailUC(newEmail, password);
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

export default EditEmailScreen;
