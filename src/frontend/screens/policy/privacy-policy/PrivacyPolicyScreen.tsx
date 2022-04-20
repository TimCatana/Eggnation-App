import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import usePrivacyPolicyScreen from './usePrivacyPolicyScreen';

const PrivacyPolicyScreen: FC = () => {
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
