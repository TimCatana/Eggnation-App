import React, {FC} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  C_ICON_PRIMARY,
  C_TEXT_LINK_PRIMARY,
  C_TEXT_PRIMARY,
} from '../../../../../../constants/Colors';
import {
  S_RS_EGGNATION_SHOP_COM,
  S_RS_EMAILS,
  S_RS_SUBSCRIBE_TO,
} from '../../../../../../constants/Strings';

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
          color={C_ICON_PRIMARY}
          name={
            isSubbedToMailingList
              ? 'checkbox-marked-outline'
              : 'checkbox-blank-outline'
          }
          size={hp('3%')}
          style={styles.icon}
        />
      </Pressable>

      <Text style={styles.text}>{S_RS_SUBSCRIBE_TO}</Text>

      <Pressable onPress={handleEggnationShopLinkClick}>
        <Text style={styles.linkText}>{S_RS_EGGNATION_SHOP_COM}</Text>
      </Pressable>

      <Text style={styles.text}>{S_RS_EMAILS}</Text>
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
    paddingRight: wp('1%'),
  },
  icon: {
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
