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
import { NavigationContainer } from '@react-navigation/native';
 
const CreateAccount = ({navigation}) =>  {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);





  const createAccount = async () => {
    console.log("email login ran");

    console.log(userName);
    console.log(email);
    console.log(password);

  let specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(userName === "" || email === "" || password === "") {
      console.log("please fill out all sections!");
      return; 
    }

    if(password.length < 8) {
      console.log("Password should be at least 8 characters long!");
      return; 
    }

    if(/\s/.test(password) === true) {
      console.log("Password must not contain whitespace");
      return; 
    }
    
    if(/\d/.test(password) === false) {
      console.log("Password must contain a number");
      return; 
    }
    
    if(specialChars.test(password) === false) {
      console.log("Password must contain one of !@#$%^&*()_+-=[]{};':\"\\|,.<>/?~");
      return; 
    }

    
    console.log('creating user');


   auth()
    .createUserWithEmailAndPassword(email, password)
   .then(() => {
     console.log('User account created & signed in!');
     console.log(user);
     console.log("navigating!");
     navigation.replace("Home");
   })
   .catch(error => {
     console.log(error.code)

     if(error.code === 'auth/invalid-email') {
      console.log('Please enter a valie email address!'); // display to UI
     }
   });
  }











  if (initializing) return null;

    return (
      <View>
        <Text>Login</Text>
        <TextInput
            placeholder='UserName'
            maxLength={350}
            onChangeText={(userName) => setUserName(userName)}
          />

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

    <Pressable onPress={createAccount}> 
          <Text>Sign up</Text>
         </Pressable>
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

export default CreateAccount;
