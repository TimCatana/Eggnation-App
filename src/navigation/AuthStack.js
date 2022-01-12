import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../screens/authentication/SignupScreen';
import LoginScreen from '../screens/authentication/LoginScreen';
import OnboardingScreen from '../screens/authentication/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

/**
 * The authentication stack is only shown if the user is currently 
 * not logged in to their account
 */
const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName; 

  /**
   * When the user enters the app, check if it is the users first time opening (this instance of) 
   * the app.
   * @firstTime The app goes to the onboarding screen
   * @notFirstTime The app goes to the login screen 
   // TODO - I need to think of a beter way to handle the error, if something goes wrong on first launch, then the user will never see the onboarding screen. I guess this is a risk I'll take 
   */
  useEffect(() => {
    try {
      const result = AsyncStorage.getItem('alreadyLaunched')
      
      if(result) {
        setIsFirstLaunch(false);
      } else {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
    } catch (err) {
      console.log('something went wrong in the onboarding screen: ' + err);
      AsyncStorage.setItem('alreadyLaunched', 'true');
      setIsFirstLaunch(false);
    }
  }, []);

  /**
   * Make sure that nothing is shown to the user before determined route is set.
   * This ensures that the user is not redirected to route 'undefined' which will
   * crash the users app.
   * @routeName is going to be determined by whether this is the users first launch or not
   */
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
      <Stack.Navigator 
        initialRouteName='onBoarding' // TODO - change this to {routeName}
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
  );
};

export default AuthStack;
