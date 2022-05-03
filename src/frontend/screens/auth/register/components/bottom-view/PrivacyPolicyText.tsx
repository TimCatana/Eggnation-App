import React, {FC} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_PRIVACY_POLICY} from '../../../../../../constants/Strings';
import {C_TEXT_LINK_PRIMARY} from '../../../../../../constants/Colors';

interface Props {
  isLoading: boolean;
  navToPrivacyPolicyScreen: () => void;
}

const PrivacyPolicyText: FC<Props> = props => {
  const {isLoading, navToPrivacyPolicyScreen} = props;

  return (
    <Pressable disabled={isLoading} onPress={navToPrivacyPolicyScreen}>
      <Text style={styles.text}>{S_RS_PRIVACY_POLICY}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_LINK_PRIMARY,
  },
});

export default PrivacyPolicyText;
