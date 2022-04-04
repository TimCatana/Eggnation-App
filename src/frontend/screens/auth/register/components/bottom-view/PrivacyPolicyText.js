import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {PRIVACY_POLICY_SCREEN} from '../../../../../util/NavigationConstants';

const PrivacyPolicyText = props => {
  const {isLoading, navigation} = props;

  return (
    <>
      <Pressable
        disabled={isLoading}
        onPress={() => {
          navigation.navigate(PRIVACY_POLICY_SCREEN);
        }}>
        <Text style={styles.text}>Privacy Policy</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: 'pink'
  },
});

export default PrivacyPolicyText;
