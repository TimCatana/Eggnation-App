import React from 'react';
import useSettingsScreen from './useSettingsScreen';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SettingsProfileSection from './components/SettingsProfileSection';
import SettingsContactSection from './components/SettingsContactSection';
import SettingsLegalSection from './components/SettingsLegalSection';
import CustomButton from '../../../components/common/CustomButton';
import SettingsMediaSection from './components/SettingsMediaSection';
const SettingsScreen = ({navigation}) => {
  const {
    isInitialized,
    email,
    emailVerificationStatus,
    language,
    handleSendVerificationEmailClick,
    logoutUser,
  } = useSettingsScreen();

  if (!isInitialized) return null;

  return (
    <View style={styles.body}>
      <View style={styles.topView}>
      <SettingsMediaSection/>
      </View>
      <View style={styles.centerView}>
        <SettingsProfileSection
          email={email}
          emailVerificationStatus={emailVerificationStatus}
          navigation={navigation}
        />
        {/* <SettingsContactSection navigation={navigation} /> */}
        <SettingsLegalSection navigation={navigation} />
      </View>
      <View style={styles.bottomView}>
        <CustomButton
          label={'logout'}
          onPress={logoutUser}
          buttonColor="red"
          textColor="white"
          fontSize={hp('2%')}
          marginBottom={hp('0.7%')}
        />
        <CustomButton
          label={'delete account'}
          onPress={() => {
            console.log('pressed!!!');
          }}
          buttonColor="red"
          textColor="white"
          fontSize={hp('2%')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
  },
  topView: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    flex: 8,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomView: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default SettingsScreen;
