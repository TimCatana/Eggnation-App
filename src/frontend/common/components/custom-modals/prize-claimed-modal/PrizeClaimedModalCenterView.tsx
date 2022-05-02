import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const PrizeClaimedModalCenterView: FC = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.titleText}>Congratulations!</Text>
      <Text style={styles.contentText}>
        Your prize has been claimed. We will be emailing your currently
        registered email with further details. Please keep an eye out for an
        email from eggnationprizes@outlook.com. Contact us using this address if
        you do not receive anything within a week. 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('5%'),
  },
  titleText: {
    fontSize: hp('5%'),
    color: 'white',
    marginBottom: hp('4%'),
  },
  contentText: {
    fontSize: hp('2%'),
    color: 'white',
    textAlign: 'justify',
  },
});

export default PrizeClaimedModalCenterView;
