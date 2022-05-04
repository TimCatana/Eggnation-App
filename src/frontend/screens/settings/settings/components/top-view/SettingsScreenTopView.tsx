import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import SettingsMediaSection from '../sections/SettingsMediaSection';

interface Props {
  isLoading: boolean;
  navToEggnationFacebook: () => void;
  navToEggnationInstagram: () => void;
}

const SettingsScreenTopView: FC<Props> = props => {
  const {isLoading, navToEggnationFacebook, navToEggnationInstagram} = props;
  return (
    <View style={styles.body}>
      <SettingsMediaSection
        isLoading={isLoading}
        navToEggnationFacebook={navToEggnationFacebook}
        navToEggnationInstagram={navToEggnationInstagram}
      />
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
