import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; // chevron-right, edit, done, send

const SettingsItem = props => {
  const {title, content, icon, isLast, onIconPress} = props;

  //  TODO - add max character limit then add ellipse to content text
  return (
    <View style={[styles.body, isLast ? {} : {borderBottomWidth: hp('0.13%'), borderBottomColor: '#4e4e4e'}]}>
      <View style={styles.leftView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.text}>{content}</Text> 
      </View>
      <View style={styles.rightView}>
        <Pressable onPress={onIconPress}>
          <IconMaterial style={styles.icon} name={icon} size={hp('2.5%')} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '97%',
    height: hp('5%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftView: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerView: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#e2e2e2',
  },
  text: {
    fontSize: hp('1.8%'),
    color: '#e2e2e2'
  },
});

export default SettingsItem;
