import React from 'react';
import {View, TextInput, StyleSheet, Label} from 'react-native';
import {windowHeight, windowWidth} from '../../util/Dimensions';

// TODO - maybe add icon?
// import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({value, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '75%',
    height: windowHeight / 15,
    // borderColor: '#ccc',
    // borderRadius: 3,
    // borderWidth: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: '100%',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});