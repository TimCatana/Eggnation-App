import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {S_LS_DONT_HAVE_AN_ACCOUNT} from '../../../../../theme/Strings';
import {C_TEXT_LIGHT} from '../../../../../theme/Colors';
import RegisterHereText from './RegisterHereText';

const LoginScreenBottomView = props => {
  const {isLoading, navToRegisterScreen} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{S_LS_DONT_HAVE_AN_ACCOUNT}</Text>
      <RegisterHereText
        isLoading={isLoading}
        navToRegisterScreen={navToRegisterScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
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

export default LoginScreenBottomView;
