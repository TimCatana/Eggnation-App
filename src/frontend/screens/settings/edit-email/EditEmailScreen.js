import React from 'react';
import useEditEmailScreen from './useEditEmailScreen';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const EditEmailScreen = () => {
  const {
    newEmail,
    handleNewEmailChange,
    password,
    handlePasswordChange,
    handleUpdateEmailClick,
  } = useEditEmailScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditEmailScreen</Text>
      <TextInput
        value={newEmail}
        onChangeText={handleNewEmailChange}
        placeholder="email"
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <Button
        title="change email"
        onPress={() => {
          handleUpdateEmailClick();
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
