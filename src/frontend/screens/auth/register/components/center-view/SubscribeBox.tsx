import React, {FC} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {C_TEXT_LINK_PRIMARY, C_TEXT_PRIMARY} from '../../../../../theme/Colors';

interface Props {
  isSubbedToMailingList: boolean;
  handleIsSubbedToMailingListChange: () => void;
  handleEggnationShopLinkClick: () => void;
}

const SubscribeBox: FC<Props> = props => {
  const {
    isSubbedToMailingList,
    handleIsSubbedToMailingListChange,
    handleEggnationShopLinkClick,
  } = props;

  return (
    <View style={styles.body}>
      <Pressable onPress={handleIsSubbedToMailingListChange}>
        <IconMaterialCommunity
          color={'gray'}
          name={
            isSubbedToMailingList
              ? 'checkbox-marked-outline'
              : 'checkbox-blank-outline'
          }
          size={hp('3%')}
          style={{marginRight: wp('2%')}}
        />
      </Pressable>

      <Text style={styles.text}>Subscribe to</Text>
      <Pressable onPress={handleEggnationShopLinkClick}>
        <Text style={styles.linkText}> eggnationshop.com </Text>
      </Pressable>
      <Text style={styles.text}>emails</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: hp('1%'),
    marginBottom: hp('3%'),
    marginRight: wp('2%'),
  },
  text: {
    fontSize: hp('2%'),
    color: C_TEXT_PRIMARY,
  },
  linkText: {
    fontSize: hp('2%'),
    color: C_TEXT_LINK_PRIMARY,
  },
});

export default SubscribeBox;
