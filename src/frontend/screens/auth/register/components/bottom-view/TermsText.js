import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_RS_TERMS_OF_SERVICE} from '../../../../../theme/Strings';
import {TERMS_SCREEN} from '../../../../../util/NavigationConstants';

const TermsText = props => {
  const {isLoading, navigation, clearTextInputs} = props;

  /**
   * Navigates to terms of service screen if no process is currently running.
   */
  const navToTermsScreen = () => {
    if (!isLoading) {
      navigation.navigate(TERMS_SCREEN);
      clearTextInputs();
    }
  };

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
