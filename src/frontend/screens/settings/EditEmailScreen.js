import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
 
const EditEmailScreen = () =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>EditEmailScreen</Text>
      <TextInput
          value={email}
          onChangeText={it => {
            setEmail(it);
          }}
          placeholder="email"
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          keyboardType="default"
          style={styles.textInput}
        />
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

export default EditEmailScreen;
