import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useTermsScreen from './useTermsScreen';

const TermsScreen: FC = () => {
  const {} = useTermsScreen();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>TermsScreen</Text>
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

export default TermsScreen;
