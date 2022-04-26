import React, {FC} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_TEXT_SETTINGS_LIGHT} from '../../../../../theme/Colors';

interface Props {
  content: string;
}

const SettingsItemCenterView: FC<Props> = props => {
  const {content} = props;

  return (
    <View style={styles.body}>
      <ScrollView
        horizontal={true}
        style={styles.scrollViewBody}
        contentContainerStyle={{alignItems: 'center'}}>
        <Text style={styles.text} numberOfLines={1}>
          {content}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  scrollViewBody: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    width: '100%',
    fontSize: hp('1.8%'),
    color: C_TEXT_SETTINGS_LIGHT,
  },
});

export default SettingsItemCenterView;
