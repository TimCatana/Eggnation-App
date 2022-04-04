import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TERMS_SCREEN} from '../../../../../util/NavigationConstants';

const TermsText = props => {
  const {isLoading, navigation} = props;

  return (
    <>
      <Pressable
        disabled={isLoading}
        onPress={() => {
          navigation.navigate(TERMS_SCREEN);
        }}>
        <Text style={styles.text}>Terms of Service</Text>
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

export default TermsText;
