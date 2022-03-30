import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterHereText from './RegisterHereText';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreenBottomView = props => {
  const {isLoading, navigation} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Don't have an account? </Text>
      <RegisterHereText isLoading={isLoading} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'green',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: hp('2%'),
  },
});

export default LoginScreenBottomView;
