import React, {FC} from 'react';
import {View, Pressable, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_SETTINGS_LIGHT} from '../../../../../../constants/Colors';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; // chevron-right, edit, done, send

interface Props {
  icon: string;
  onIconPress: () => void;
  iconDisabled: boolean;
}

const SettingsItemRightView: FC<Props> = props => {
  const {icon, onIconPress, iconDisabled} = props;

  return (
    <View style={styles.body}>
      <Pressable disabled={iconDisabled} onPress={onIconPress}>
        <IconMaterial style={styles.icon} name={icon} size={hp('2.7%')} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: C_TEXT_SETTINGS_LIGHT,
  },
});

export default SettingsItemRightView;
