import React from 'react';
import useEditPasswordScreen from './useEditPasswordScreen';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const EditPasswordScreen = () => {
  const {
    newPassword,
    handleNewPasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    currentPassword,
    handleCurrentPasswordChange,
    handleUpdatePasswordClick,
  } = useEditPasswordScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditPasswordScreen</Text>
      <TextInput
        value={newPassword}
        onChangeText={handleNewPasswordChange}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <TextInput
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <TextInput
        value={currentPassword}
        onChangeText={handleCurrentPasswordChange}
        placeholder="password"
        keyboardType="default"
        style={styles.textInput}
      />
      <Button
        title="change password"
        onPress={() => {
          handleUpdatePasswordClick();
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
