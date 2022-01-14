import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native';
 
const SimpleSetting = (props) =>  {
  const {onPressFunction, settingText, settingIcon, isLastItem} = props;

  return (
    <Pressable style={isLastItem ? styles.lastItemBody : styles.itemBody} onPress={onPressFunction}>
        <Text style={styles.title}>{settingText} {settingIcon}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
   itemBody: {
    paddingVertical: 3,
    borderBottomWidth: 0.5,
    borderColor: "#5B5B5B",
    marginLeft: 15,
    justifyContent: 'flex-start'
  },
  lastItemBody: {
    paddingVertical: 3,
    borderColor: "#5B5B5B",
    marginLeft: 15,
    justifyContent: 'flex-start'
  },
   title: {
     fontSize: 20,
     color: "white",
    //  textAlignVertical: 'center',
    //  paddingLeft: 15,
     marginVertical: 5,
   },
});

export default SimpleSetting;
