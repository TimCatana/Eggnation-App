import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {getUserEmailUC} from '../../../domain/getUserEmailUC';
import {getUserEmailVerificationStatusUC} from '../../../domain/getUserEmailVerificationStatus';
import {
  EDIT_EMAIL_SCREEN,
  EDIT_PASSWORD_SCREEN,
} from '../../util/NavigationConstants';
import { sendVerificationEmailUC } from '../../../domain/sendVerificationEmailUC';

const SettingsScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  const [email, setEmail] = useState('');
  const [emailVerificationStatus, setEmailVerificationStatus] = useState('');
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const email = getUserEmailUC();
    const emailVerificationStatus = getUserEmailVerificationStatusUC();

    setEmail(email);
    setEmailVerificationStatus(emailVerificationStatus);
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>SettingsScreen</Text>
      <Text>{email}</Text>
      <Button
        title="change email"
        onPress={() => {
          navigation.navigate(EDIT_EMAIL_SCREEN);
        }}
      />
      <Text>{emailVerificationStatus.toString()}</Text>
      <Button title="Send VerificationStatus" onPress={() => {sendVerificationEmailUC()}} />
      <Button
        title="Update password"
        onPress={() => {
          navigation.navigate(EDIT_PASSWORD_SCREEN);
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

export default SettingsScreen;
