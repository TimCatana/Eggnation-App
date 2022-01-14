import React, {useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from '../redux/actions'

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  
  const {user} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  /**
   * on mount create a subscriber that listens to changes in the firebase authentication state.
   * When the authentication state changes the onAuthStateChanged callback function is fired.
   * If the user is successfully logged in, them the user state is set to not null and this page unmounts
   * @return on unMount, unsubscribe to the firebase authentication state.
   */
  useEffect(() => {
    const subscriber = auth().onUserChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  /**
   * The callback function that is fired when the authentication state is changed.
   * @note the variables types in the param below are not 100% accurate since react-native-firebase docs
   *       is not clear on some variables. see react-native-firebase docs for more info as they may update the docs
   * @param {
   *   metadata: { 
   *     lastSignInTime: string | undefined,
   *     creationTime: string | undefined
   *   },
   *   phoneNumber: string | null,
   *   displayName: string | null,
   *   isAnonymous: boolean,
   *   providerData: [{
   *     email: undefined | string,
   *     phoneNumber: undefined | string | null,
   *     uid: string,
   *     photoURL: undefined | string | null,
   *     displayName: undefined | string | null,
   *     providerId: string
   *   }],
   *   email: string | null,
   *   emailVerified: boolean,
   *   providerId: string,
   *   tenantId: string | null,
   *   photoURL: string | null,
   *   uid: string
   * } user 
   * @note user can also be null if something goes wrong
   * @reduxStateChange The user is set to the user param
   */
  const onAuthStateChanged = (user) => {
    // console.log('user changed: ');
    console.log(user.providerData);
    // console.log('provider data: ');
    // console.log(user.providerData);
    dispatch(setUser(user))
    if (initializing) setInitializing(false);
  };

  /**
   * While this page is still initializing, don't show anything.
   * This makes sure the user isn't shown the incorrect stack because the user 
   * variable is not set yet and this component rendered shown prematurely. 
   */
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
