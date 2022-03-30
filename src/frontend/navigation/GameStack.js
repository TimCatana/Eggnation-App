import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GameTabs from './GameTabs';
import SettingsScreen from '../screens/settings/settings/SettingsScreen';
import PrivacyPolicyScreen from '../screens/policy/privacy-policy/PrivacyPolicyScreen';
import TermsScreen from '../screens/policy/terms/TermsScreen';
import EditEmailScreen from '../screens/settings/edit-email/EditEmailScreen';
import EditPasswordScreen from '../screens/settings/edit-password/EditPasswordScreen';
import EditLanguageScreen from '../screens/settings/edit-language/EditLanguageScreen';
import ClaimPrizeScreen from '../screens/game/claim-prize/ClaimPrizeScreen';

import {
  GAME_TABS,
  PRIVACY_POLICY_SCREEN,
  TERMS_SCREEN,
  SETTINGS_SCREEN,
  EDIT_EMAIL_SCREEN,
  EDIT_LANGUAGE_SCREEN,
  EDIT_PASSWORD_SCREEN,
  CLAIM_PRIZE_SCREEN
} from '../util/NavigationConstants';

const Stack = createStackNavigator();

const GameStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={GAME_TABS}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={GAME_TABS} component={GameTabs} />
      <Stack.Screen name={CLAIM_PRIZE_SCREEN} component={ClaimPrizeScreen} />
      <Stack.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={EDIT_EMAIL_SCREEN} component={EditEmailScreen} />
      <Stack.Screen
        name={EDIT_PASSWORD_SCREEN}
        component={EditPasswordScreen}
      />
      <Stack.Screen
        name={EDIT_LANGUAGE_SCREEN}
        component={EditLanguageScreen}
      />
      <Stack.Screen
        name={PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name={TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default GameStack;
