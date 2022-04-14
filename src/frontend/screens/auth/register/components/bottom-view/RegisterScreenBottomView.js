import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_LIGHT} from '../../../../../theme/Colors';
import PrivacyPolicyText from './PrivacyPolicyText';
import TermsText from './TermsText';

const RegisterScreenBottomView = props => {
  const {isLoading, navToPrivacyPolicyScreen, navToTermsScreen} = props;

  return (
    <View style={styles.body}>
      <View style={styles.topRow}>
        <Text style={styles.text}>By registering you agree to our </Text>
      </View>
      <View style={styles.bottomRow}>
        <PrivacyPolicyText
          isLoading={isLoading}
          navToPrivacyPolicyScreen={navToPrivacyPolicyScreen}
        />
        <Text style={styles.text}> and </Text>
        <TermsText
          isLoading={isLoading}
          navToTermsScreen={navToTermsScreen}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_LIGHT,
  },
});

export default RegisterScreenBottomView;
