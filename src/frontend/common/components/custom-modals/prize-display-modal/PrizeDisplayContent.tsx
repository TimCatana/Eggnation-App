import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {bookShelfTop} from '../../../../../../assets';
import {
  C_BUTTON_DISABLED,
  C_BUTTON_ENABLED,
  C_TEXT_INPUT_TEXT_PRIMARY,
  C_TEXT_LIGHT,
  C_TEXT_PRIMARY,
} from '../../../../theme/Colors';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomButton} from '../../index';
import {Screens} from '../../../../../constants/NavigationConstants';
import {
  PCT_CASH,
  PCT_DELIVERABLE,
  PCT_NONE,
} from '../../../../../constants/Constants';

interface Props {
  isLoading: boolean;
  prizeId: string;
  prizeTitle: string;
  displayImage: any;
  prizeDesc: string;
  prizeTier: string;
  prizeType: string;
  prizeClaimType: string;
  prizeIsClaimed: boolean;
  isWonPrize: boolean;
  navigation: any;
  handleHidePrize: () => void;
}

const PrizeDisplayContent: FC<Props> = props => {
  const {
    isLoading,
    prizeId,
    prizeTitle,
    displayImage,
    prizeDesc,
    prizeTier,
    prizeType,
    prizeClaimType,
    prizeIsClaimed,
    isWonPrize,
    navigation,
    handleHidePrize,
  } = props;

  return (
    <View style={styles.body}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.topView}>
          <Image
            style={{width: '75%', height: '75%'}}
            resizeMode="contain"
            source={displayImage}
          />
        </View>

        <View style={styles.centerView}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="stretch"
            source={bookShelfTop}
          />
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{prizeTitle}</Text>
          </View>
        </View>

        {isWonPrize && (
          <View style={styles.centerView}>
            <CustomButton
              label={'Claim'}
              onPress={async () => {
                if (!isLoading) {
                  await navigation.navigate(Screens.CLAIM_PRIZE_SCREEN, {
                    prizeId: prizeId,
                  });
                  setTimeout(() => {
                    handleHidePrize();
                  }, 500);
                }
              }}
              buttonEnabledColor={C_BUTTON_ENABLED}
              buttonDisabledColor={C_BUTTON_DISABLED}
              textColor={C_TEXT_LIGHT}
              fontSize={hp('2%')}
              elevation={0}
              disabled={false
                // isLoading || prizeIsClaimed || prizeClaimType == PCT_NONE
              }
            />
          </View>
        )}

        <View style={styles.bottomView}>
          <Text style={styles.text}>{prizeDesc}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 13,
    display: 'flex',
  },
  topView: {
    width: '100%',
    height: hp('30%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    // backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('9%'),
  },
  bottomView: {},
  titleView: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: hp('4.4%'),
    marginBottom: hp('2%'),
  },
  text: {
    paddingHorizontal: hp('2%'),
    paddingTop: hp('2%'),
    fontSize: hp('2%'),
    textAlign: 'justify',
    color: C_TEXT_PRIMARY,
  },
});

export default PrizeDisplayContent;
