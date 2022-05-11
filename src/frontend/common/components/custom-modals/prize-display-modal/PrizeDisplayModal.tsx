import React, {FC} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  C_BACKGROUND_BOOKSHELF,
  C_ICON_BOOKSHELF,
} from '../../../../../constants/Colors';
import {
  PressableIcon,
  BookShelfLeftView,
  BookShelfRightView,
} from '../../index';
import PrizeDisplayModalCenterView from './PrizeDisplayModalCenterView';
import usePrizeDisplayModal from './usePrizeDisplayModal';

interface Props {
  isLoading: boolean;
  prizeId: string;
  prizeTitle: string;
  prizeDesc: string;
  prizeTier: string;
  prizeType: string;
  prizeClaimType: string;
  prizeClaimed: boolean;
  prizeDelivered: boolean;
  prizeWonDate: string;
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
    prizeClaimed,
    prizeDelivered,
    prizeWonDate,
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
        <BookShelfLeftView />

        <PrizeDisplayModalCenterView
          isLoading={isLoading}
          prizeId={prizeId}
          prizeTitle={prizeTitle}
          displayImage={displayImage}
          prizeDesc={prizeDesc}
          prizeTier={prizeTier}
          prizeType={prizeType}
          prizeClaimType={prizeClaimType}
          prizeClaimed={prizeClaimed}
          prizeDelivered={prizeDelivered}
          prizeWonData={prizeWonDate}
          isWonPrize={isWonPrize}
          navigation={navigation}
          handleHidePrize={handleHidePrize}
        />

        <BookShelfRightView />

        <PressableIcon
          icon={'chevron-left'}
          onPress={handleHidePrize}
          viewStyle={styles.icon}
          iconStyle={{}}
          iconSize={hp('5%')}
          iconColor={C_ICON_BOOKSHELF}
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
  icon: {
    position: 'absolute',
    left: hp('-0.5%'),
    top: hp('0.2%'),
  },
});

export default PrizeDisplayModal;
