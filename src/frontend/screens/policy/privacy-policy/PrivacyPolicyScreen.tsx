import React from 'react';
import usePrivacyPolicyScreen from './usePrivacyPolicyScreen';
import {View, Text, StyleSheet} from 'react-native';

const PrivacyPolicyScreen = () => {
  const {} = usePrivacyPolicyScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>PrivacyPolicyScreen</Text>
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

export default PrivacyPolicyScreen;
