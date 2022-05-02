import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../constants/NavigationConstants';
import GameTabs from './GameTabs';
import {
  SettingsScreen,
  EditEmailScreen,
  EditPasswordScreen,
  EditLanguageScreen,
  ClaimPrizeScreen,
  PrivacyPolicyScreen,
  TermsScreen,
  DeleteAccountScreen,
} from '../screens';
import {GameStackParamList} from './ScreenProps';
import HowToPlayScreen from '../screens/game/how-to-play/HowToPlayScreen';

const Stack = createStackNavigator<GameStackParamList>();

const GameStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.GAME_TABS}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={Screens.GAME_TABS} component={GameTabs} />
      <Stack.Screen
        name={Screens.CLAIM_PRIZE_SCREEN}
        component={ClaimPrizeScreen}
        initialParams={{prizeId: ''}}
      />
      <Stack.Screen name={Screens.SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen
        name={Screens.EDIT_EMAIL_SCREEN}
        component={EditEmailScreen}
      />
      <Stack.Screen
        name={Screens.EDIT_PASSWORD_SCREEN}
        component={EditPasswordScreen}
      />
      <Stack.Screen
        name={Screens.DELETE_ACCOUNT_SCREEN}
        component={DeleteAccountScreen}
      />
      <Stack.Screen
        name={Screens.EDIT_LANGUAGE_SCREEN}
        component={EditLanguageScreen}
      />
      <Stack.Screen
        name={Screens.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name={Screens.HOW_TO_PLAY_SCREEN}
        component={HowToPlayScreen}
      />
      <Stack.Screen name={Screens.TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default GameStack;
