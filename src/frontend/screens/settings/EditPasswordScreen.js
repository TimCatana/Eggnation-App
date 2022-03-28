import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

const EditPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditPasswordScreen</Text>
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
      <TextInput
        value={currentPassword}
        onChangeText={setCurrentPassword}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
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
