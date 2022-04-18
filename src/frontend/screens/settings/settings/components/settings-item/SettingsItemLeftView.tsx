import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_SETTINGS_LIGHT} from '../../../../../theme/Colors';

interface Props {
  title: string;
}

const SettingsItemLeftView: FC<Props> = props => {
  const {title} = props;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: hp('1.8%'),
    color: C_TEXT_SETTINGS_LIGHT,
  },
});

export default SettingsItemLeftView;
