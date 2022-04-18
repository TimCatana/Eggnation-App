import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsMediaSection from '../sections/SettingsMediaSection';

interface Props {
  isLoading: boolean;
}

const SettingsScreenTopView: FC<Props> = props => {
  const {isLoading} = props;
  return (
    <View style={styles.body}>
      <SettingsMediaSection isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreenTopView;
