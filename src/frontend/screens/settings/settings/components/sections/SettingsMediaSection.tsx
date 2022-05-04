import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {C_ICON_LIGHT} from '../../../../../../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  isLoading: boolean;
  navToEggnationFacebook: () => void;
  navToEggnationInstagram: () => void;
}

const SettingsMediaSection: FC<Props> = props => {
  const {isLoading, navToEggnationFacebook, navToEggnationInstagram} = props;

  return (
    <>
      <Pressable
        onPress={navToEggnationFacebook}
        disabled={isLoading}
        style={{paddingRight: 20}}>
        <FontAwesome name={'facebook'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable>
      <Pressable onPress={navToEggnationInstagram} disabled={isLoading}>
        <FontAwesome name={'instagram'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable>
      {/* <Pressable
        onPress={() => {
          console.log('twitter clicked');
        }}
        disabled={isLoading}>
        <FontAwesome name={'twitter'} size={hp('6%')} color={C_ICON_LIGHT} />
      </Pressable> */}
    </>
  );
};

export default SettingsMediaSection;
