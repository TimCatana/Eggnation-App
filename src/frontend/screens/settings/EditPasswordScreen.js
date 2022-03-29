import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import doUpdateUserPassword from '../../../backend/auth/mutators/doUpdateUserPassword';

const EditPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditPasswordScreen</Text>
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
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
      <TextInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <Button
        title="change password"
        onPress={() => {
          doUpdateUserPassword(newPassword, currentPassword);
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

export default EditPasswordScreen;
