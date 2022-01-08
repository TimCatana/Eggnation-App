import React, {useState, useEffect} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import {setUser} from '../redux/actions'

const Routes = () => {
  const {user} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    dispatch(setUser(user))
    // console.log('user is: ' + user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;