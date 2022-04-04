import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IonIcons from 'react-native-vector-icons/Ionicons';

const FormInput = props => {
  const {
    value,
    onValueChange,
    placeholder,
    keyboardType,
    isPassword,
    maxLength,
    width,
    height,
  } = props;

  const [isSecureTextEntry, setIsSecureTextEntry] = useState(isPassword);

  const togglePasswordView = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <View style={[styles.inputContainer, {width: width, height: height}]}>
      <TextInput
        value={value}
        onChangeText={onValueChange}
        maxLength={maxLength}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
        secureTextEntry={isSecureTextEntry}
      />
      {isPassword && (
        <View style={styles.icon}>
          <Pressable onPress={togglePasswordView}>
            <IonIcons
              name={isSecureTextEntry ? 'eye-off' : 'eye'}
              size={25}
              color="#666"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    borderWidth: hp('0.2%'),
    borderRadius: wp('0.5%'),
    borderBottomColor: 'gray',
  },
  input: {
    flex: 9,
    fontSize: hp('1.7%'),
    paddingLeft: wp('1.5%'),
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FormInput;
