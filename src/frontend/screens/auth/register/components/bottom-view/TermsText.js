import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_TERMS_OF_SERVICE} from '../../../../../theme/Strings';

const TermsText = props => {
  const {isLoading, navToTermsScreen} = props;

  return (
    <>
      <Pressable disabled={isLoading} onPress={navToTermsScreen}>
        <Text style={styles.text}>{S_RS_TERMS_OF_SERVICE}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
    color: 'pink',
  },
});

export default TermsText;
