import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; // chevron-right, edit, done, send

const SettingsItem = props => {
  const {title, content, icon, isLast, onIconPress} = props;

  //  TODO - add max caracter limit then add ellipse to content text
  return (
    <View style={[styles.body, isLast ? {} : {borderBottomWidth: hp('0.1%')}]}>
      <View style={styles.leftView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.text}>{content}</Text> 
      </View>
      <View style={styles.rightView}>
        <Pressable onPress={onIconPress}>
          <IconMaterial style={styles.icon} name={icon} size={hp('3%')} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '97%',
    height: hp('4.5%'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftView: {
    flex: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  centerView: {
    flex: 4,
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
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
  text: {
    fontSize: hp('1.8%'),
  },
});

export default SettingsItem;
