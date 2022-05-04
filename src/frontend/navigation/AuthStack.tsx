import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../../constants/NavigationConstants';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  PrivacyPolicyScreen,
  TermsScreen,
} from '../screens';
import {AuthStackParamList} from './ScreenProps';

const Stack = createStackNavigator<AuthStackParamList>();

/**
 * The authentication stack is only shown if the user is currently
 * not logged in to their account
 */
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.LOGIN_SCREEN}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen
        name={Screens.FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={Screens.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={Screens.REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen
        name={Screens.PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name={Screens.TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
