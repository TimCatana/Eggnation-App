import React, {FC} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_TERMS_OF_SERVICE} from '../../../../../../constants/Strings';
import {C_TEXT_LINK_PRIMARY} from '../../../../../../constants/Colors';

interface Props {
  isLoading: boolean;
  navToTermsScreen: () => void;
}

const TermsText: FC<Props> = props => {
  const {isLoading, navToTermsScreen} = props;

  return (
    <Pressable disabled={isLoading} onPress={navToTermsScreen}>
      <Text style={styles.text}>{S_RS_TERMS_OF_SERVICE}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_LINK_PRIMARY,
  },
});

export default TermsText;
