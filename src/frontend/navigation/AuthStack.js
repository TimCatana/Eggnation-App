import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login/LoginScreen';
import RegisterScreen from '../screens/auth/register/RegisterScreen'
import ForgotPasswordScreen from '../screens/auth/forgot-password/ForgotPasswordScreen'
import PrivacyPolicyScreen from '../screens/policy/privacy-policy/PrivacyPolicyScreen';
import TermsScreen from '../screens/policy/terms/TermsScreen';
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  PRIVACY_POLICY_SCREEN,
  TERMS_SCREEN,
} from '../util/NavigationConstants';

// import LOGIN_SCREEN from '../util/NavigationConstants'
// import REGISTER_SCREEN from '../util/NavigationConstants'
// import FORGOT_PASSWORD_SCREEN from '../util/NavigationConstants'

const Stack = createStackNavigator();

/**
 * The authentication stack is only shown if the user is currently
 * not logged in to their account
 */
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN_SCREEN}
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
      <Stack.Screen
        name={FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={PRIVACY_POLICY_SCREEN}
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name={TERMS_SCREEN} component={TermsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
