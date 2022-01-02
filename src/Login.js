import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
  TextInput,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) =>  {
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState("");

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   /**
    * Once user changes, should navigate to home screen.
    * WIll navigate to home if user was previously logged in
    */
   useEffect(() => {
    if(user !== "") {
      console.log("user = " + user);
      if (user) {
        navigation.replace("Home");
      }
    }
   }, [user])

  /**
  * Subscribe to the authentication state
  */
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

    /**
    * Handle what happens on state change
    * @param {} user 
    */
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    console.log(user);
  }

  /**
   * go to the create account page
   */
  const goToCreateAccount = async () => {
    navigation.replace("CreateAccount");
  }

 /**
  * Attempt login
  */
  const login = async () => {
    console.log("email login ran");

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
      console.log('Login Successful!');
      navigation.replace("Home");
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-email') {
        console.log('Incorrect email or password!'); // display to UI
      }
    });
  }

   if (!user) { // display login form
     return (
       <View style={styles.body}>
         {/* <Text>Login</Text> */}
         {/* <TextInput
            placeholder='UserName'
            maxLength={350}
            onChangeText={(userName) => setUserName(userName)}
          /> */}
         <TextInput
            placeholder='Email'
            maxLength={350}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            placeholder='Password'
            maxLength={50}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

         <Pressable onPress={login}> 
          <Text>Login</Text>
         </Pressable>

         <Pressable onPress={goToCreateAccount}> 
          <Text>New User? create account</Text>
         </Pressable>
           {/* <Text>create account</Text> */}
          {/* </Button> */}
       </View>
     );
   } 
 
   return ( // if user exists should forward to home screen
     <View>
     </View>
   );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default Login ;
