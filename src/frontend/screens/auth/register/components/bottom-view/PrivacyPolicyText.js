import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_PRIVACY_POLICY} from '../../../../../theme/Strings';
import {C_TEXT_LINK_PRIMARY} from '../../../../../theme/Colors';
import {PRIVACY_POLICY_SCREEN} from '../../../../../util/NavigationConstants';

const PrivacyPolicyText = props => {
  const {isLoading, navToPrivacyPolicyScreen} = props;

  return (
    <>
      <Pressable disabled={isLoading} onPress={navToPrivacyPolicyScreen}>
        <Text style={styles.text}>{S_RS_PRIVACY_POLICY}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_LINK_PRIMARY,
  },
});

export default PrivacyPolicyText;
