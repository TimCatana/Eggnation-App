import React, {FC} from 'react';
import {
  View,
  ScrollView,
  Text,
  Modal,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {S_PDM_CLAIM_PRIZE_BUTTON} from '../../../theme/Strings';
import {
  C_BUTTON_ENABLED,
  C_BUTTON_DISABLED,
  C_TEXT_LIGHT,
  C_ICON_PRIMARY,
  C_TEXT_PRIMARY,
  C_BACKGROUND_BOOKSHELF,
} from '../../../theme/Colors';
import {Screens} from '../../../../constants/NavigationConstants';
import {CustomButton, TopLeftCornerIcon} from '../index';

import usePrizeDisplayModal from './usePrizeDisplayModal';
import PrizeDisplayModalLeftView from './PrizeDisplayModalLeftView';
import PrizeDisplayModalRightView from './PrizeDisplayModalRightView';
import PrizeDisplayModalCenterView from './PrizeDisplayModalCenterView';

interface Props {
  isLoading: boolean;
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeTier: string;
  prizeType: string;
  prizeClaimType: string;
  prizeIsClaimed: boolean;
  isWonPrize: boolean;
  isModalVisible: boolean;
  handleHidePrize: () => void;
  navigation: any;
}

const PrizeDisplayModal: FC<Props> = props => {
  const {
    isLoading,
    prizeId,
    prizeTitle,
    prizeDesc,
    prizeTier,
    prizeType,
    prizeClaimType,
    prizeIsClaimed,
    isWonPrize,
    isModalVisible,
    handleHidePrize,
    navigation,
  } = props;

  const {getDisplayImage} = usePrizeDisplayModal();

  const displayImage = getDisplayImage(prizeType);

  return (
    <Modal
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          handleHidePrize();
        }
      }}>
      <View style={styles.body}>
        <PrizeDisplayModalLeftView />

        <PrizeDisplayModalCenterView
          isLoading={isLoading}
          prizeId={prizeId}
          prizeTitle={prizeTitle}
          displayImage={displayImage}
          prizeDesc={prizeDesc}
          prizeTier={prizeTier}
          prizeType={prizeType}
          prizeClaimType={prizeClaimType}
          prizeIsClaimed={prizeIsClaimed}
          isWonPrize={isWonPrize}
          navigation={navigation}
          handleHidePrize={handleHidePrize}
        />

        <PrizeDisplayModalRightView />

        <TopLeftCornerIcon
          icon={'arrow-left'}
          onPress={handleHidePrize}
          viewStyle={styles.icon}
          iconStyle={{}}
          iconSize={hp('3.5%')}
          iconColor={C_ICON_PRIMARY}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: C_BACKGROUND_BOOKSHELF,
  },
  topView: {
    flex: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  centerView: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  bottomView: {
    flex: 10,
    paddingHorizontal: wp('3%'),
    // backgroundColor: 'yellow',
  },
  icon: {
    position: 'absolute',
    top: hp('1%'),
    left: wp('1%'),
  },
  titleText: {
    fontSize: hp('5%'),
    color: C_TEXT_PRIMARY,
  },
  text: {
    fontSize: 30,
    color: C_TEXT_PRIMARY,
  },
});

export default PrizeDisplayModal;
