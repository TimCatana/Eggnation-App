import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { REGISTER_SCREEN } from '../../../../../util/NavigationConstants';

const RegisterHereText = props => {
  const {isLoading, navigation} = props;

  return (
    <>
      <Pressable
        disabled={isLoading}
        onPress={() => {
          navigation.navigate(REGISTER_SCREEN);
        }}>
        <Text style={[styles.text, {color: 'blue'}]}>Register here</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: hp('2%'),
  },
});

export default RegisterHereText;
