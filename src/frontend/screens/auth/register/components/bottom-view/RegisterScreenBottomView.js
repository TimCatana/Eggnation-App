import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PrivacyPolicyText from './PrivacyPolicyText';
import TermsText from './TermsText';

const RegisterScreenBottomView = props => {
  const {isLoading, navigation} = props;

  return (
    <View style={styles.body}>
      <View style={styles.topRow}>
        <Text style={styles.text}>By registering you agree to our </Text>
      </View>
      <View style={styles.bottomRow}>
        <PrivacyPolicyText isLoading={isLoading} navigation={navigation} />
        <Text style={styles.text}> and </Text>
        <TermsText isLoading={isLoading} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'green',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topRow: {
    backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  bottomRow: {
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor: 'blue',
  },
  text: {
    fontSize: hp('2%'),
  },
});

export default RegisterScreenBottomView;
