import {StackNavigationProp} from '@react-navigation/stack';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {Screens} from '../../constants/NavigationConstants';

/**
 * PARAM LISTS
 */
export type AuthStackParamList = {
  [Screens.LOGIN_SCREEN]: undefined;
  [Screens.REGISTER_SCREEN]: undefined;
  [Screens.FORGOT_PASSWORD_SCREEN]: undefined;
  [Screens.PRIVACY_POLICY_SCREEN]: undefined;
  [Screens.TERMS_SCREEN]: undefined;
};

export type GameStackParamList = {
  [Screens.LOGIN_SCREEN]: undefined;
  [Screens.CLAIM_PRIZE_SCREEN]: {prizeId: string};
  [Screens.SETTINGS_SCREEN]: undefined;
  [Screens.EDIT_EMAIL_SCREEN]: undefined;
  [Screens.EDIT_PASSWORD_SCREEN]: undefined;
  [Screens.EDIT_LANGUAGE_SCREEN]: undefined;
  [Screens.PRIVACY_POLICY_SCREEN]: undefined;
  [Screens.TERMS_SCREEN]: undefined;
  [Screens.GAME_TABS]: undefined;
};

export type GameTabParamList = {
  [Screens.HOME_SCREEN]: undefined;
  [Screens.AVAILABLE_PRIZES_SCREEN]: undefined;
  [Screens.WON_PRIZES_SCREEN]: undefined;
};

/**
 * Screens
 */

export type ForgotPasswordScreenProp = StackNavigationProp<
  AuthStackParamList,
  Screens.FORGOT_PASSWORD_SCREEN
>;

export type LoginScreenProp = StackNavigationProp<
  AuthStackParamList,
  Screens.LOGIN_SCREEN
>;

export type RegisterScreenProp = StackNavigationProp<
  AuthStackParamList,
  Screens.REGISTER_SCREEN
>;

export type AvailablePrizesScreenProp = CompositeNavigationProp<
  StackNavigationProp<GameStackParamList, Screens.GAME_TABS>,
  MaterialTopTabNavigationProp<
    GameTabParamList,
    Screens.AVAILABLE_PRIZES_SCREEN
  >
>;

export type HomeScreenProp = CompositeNavigationProp<
  StackNavigationProp<GameStackParamList, Screens.GAME_TABS>,
  MaterialTopTabNavigationProp<GameTabParamList, Screens.HOME_SCREEN>
>;

export type WonPrizeScreenProp = CompositeNavigationProp<
  StackNavigationProp<GameStackParamList, Screens.GAME_TABS>,
  MaterialTopTabNavigationProp<GameTabParamList, Screens.WON_PRIZES_SCREEN>
>;

export type ClaimPrizeScreenProp = StackNavigationProp<
  GameStackParamList,
  Screens.CLAIM_PRIZE_SCREEN
>;

export type ClaimPrizeRouteProp = RouteProp<
  GameStackParamList,
  Screens.CLAIM_PRIZE_SCREEN
>;


export type EditEmailScreenProp = StackNavigationProp<
  GameStackParamList,
  Screens.EDIT_EMAIL_SCREEN
>;

export type EditPasswordScreenProp = StackNavigationProp<
  GameStackParamList,
  Screens.EDIT_PASSWORD_SCREEN
>;

export type EditLanguageScreenProp = StackNavigationProp<
  GameStackParamList,
  Screens.EDIT_LANGUAGE_SCREEN
>;

export type SettingsScreenProp = StackNavigationProp<
  GameStackParamList,
  Screens.SETTINGS_SCREEN
>;

// export type ParamList = {
//   Detail: {
//     incident: IncidentProps;
//   };
// };

// export type RegisterScreenProp = StackNavigationProp<
//   AuthStackParamList,
//   Screens.REGISTER_SCREEN
// >;

// export type LoginScreenProp = StackNavigationProp<
//   AuthStackParamList,
//   'ForgotPasswordScreen'
// >;

// export type availablePrizesScreenProp = CompositeNavigationProp<
//   StackNavigationProp<GameStackParamList, 'GameTabs'>,
//   MaterialTopTabNavigationProp<GameTabParamList, 'AvailablePrizesScreen'>
// >;
