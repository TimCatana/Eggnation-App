import React from 'react';
import {View, ScrollView, Text, Modal, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TopLeftCornerIcon from './TopLeftCornerIcon';
import CustomButton from './CustomButton';

import phoneImage from '../../../../assets/phone.png';
import earBudsImage from '../../../../assets/earbuds.png';
import hoodieImage from '../../../../assets/hoodie.png';
import laptopImage from '../../../../assets/laptop.png';
import cashImage from '../../../../assets/cash.png';
import tabletImage from '../../../../assets/tablet.png';
import shirtImage from '../../../../assets/shirt.png';
import presentImage from '../../../../assets/present.png';
import { CLAIM_PRIZE_SCREEN } from '../../util/NavigationConstants';

const getDisplayImage = prizeType => {
  if (prizeType === 'phone') {
    return phoneImage;
  } else if (prizeType === 'tablet') {
    return tabletImage;
  } else if (prizeType === 'laptop') {
    return laptopImage;
  } else if (prizeType === 'earbuds') {
    return earBudsImage;
  } else if (prizeType === 'shirt') {
    return shirtImage;
  } else if (prizeType === 'hoodie') {
    return hoodieImage;
  } else if (prizeType === 'cash') {
    return cashImage;
  } else {
    return presentImage;
  }
};

const PrizeDisplayModal = props => {
  const {
    prizeTitle,
    prizeDesc,
    prizeTier,
    prizeType,
    prizeIsClaimed,
    isWonPrize,
    isModalVisible,
    handleHidePrize,
    navigation,
  } = props;

  const displayImage = getDisplayImage(prizeType);

  return (
    <Modal
      style={styles.formView}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          hidePasswordModal();
        }
      }}>
      <ScrollView vertical={true}>
        <View style={styles.body}>
          <TopLeftCornerIcon
            icon={'arrow-left'}
            onPress={handleHidePrize}
            viewStyle={styles.icon}
            iconStyle={{}}
            iconSize={hp('3.5%')}
          />

          <View style={styles.topView}>
            <Image
              style={{height: hp('25%'), width: hp('25%')}}
              resizeMode="contain"
              source={displayImage}
            />
          </View>
          <View style={styles.centerView}>
            <Text style={styles.titleText}>{prizeTitle}</Text>
            <CustomButton 
             label={'Claim'}
             onPress={() => {
              navigation.navigate(CLAIM_PRIZE_SCREEN)
             }}
             buttonEnabledColor={'pink'}
             buttonDisabledColor={'gray'}
             textColor={'white'}
             fontSize={hp('2%')}
            //  disabled={prizeIsClaimed || isWonPrize}
            />
          </View>
          <View style={styles.bottomView}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              risus ac sem venenatis egestas. Suspendisse pulvinar ornare
              molestie. Donec auctor tellus id quam commodo pharetra. Sed non
              fermentum nisl. Vestibulum ac justo non turpis mollis laoreet.
              Etiam et est at metus malesuada ornare. Morbi purus ante,
              consectetur et dui ut, fermentum accumsan est. Pellentesque varius
              efficitur tellus, ac placerat nulla. Nunc vehicula lobortis
              congue. Morbi commodo diam lorem, mattis tristique felis
              sollicitudin at. Vivamus id tincidunt sapien. Cras at ornare arcu.
              Nam nisl nunc, finibus at ante non, semper maximus turpis. Nulla
              ac rutrum orci, nec tempus lectus. Maecenas consequat magna vel
              diam ornare, laoreet semper leo fringilla. Quisque ac efficitur
              nunc, pharetra sagittis orci. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Duis eu odio et libero auctor interdum
              nec non nulla. Sed efficitur, nisi vel lobortis ullamcorper, dui
              diam vehicula magna, vel pulvinar nulla quam ullamcorper libero.
              Sed eget tristique nunc, non lacinia urna. Maecenas in dolor
              consequat eros ultrices gravida quis eu odio. Cras elementum nunc
              ut arcu ornare eleifend. In vitae bibendum est, ut porttitor elit.
              In hac habitasse platea dictumst. Aliquam interdum consequat nisl,
              id rhoncus nunc aliquet in. Aenean consectetur egestas metus, id
              congue nunc ultricies ut. Vivamus interdum bibendum odio. Fusce
              congue neque lectus, et malesuada erat pellentesque sed. Ut
              aliquet sem vel dignissim vehicula. Proin faucibus nibh nisi, vel
              vestibulum sapien sagittis egestas. Donec ut eros sed nunc sodales
              imperdiet id ut ligula. Proin nibh turpis, pellentesque et iaculis
              in, pulvinar et mi. Aliquam ac nulla id tellus maximus imperdiet
              sit amet quis nunc. Duis sed sodales nisl, eget interdum leo.
              Maecenas egestas lorem dui, id lacinia sapien volutpat eu. Duis
              interdum magna eget lacus feugiat semper. Curabitur quis felis eu
              eros tempor laoreet. Fusce elit enim, hendrerit at neque nec,
              accumsan rhoncus dui. Vivamus ut ex pharetra, sollicitudin metus
              nec, tristique justo. Donec molestie varius maximus. Suspendisse
              justo turpis, bibendum ut velit ac, elementum aliquam nulla.
              Pellentesque eget finibus nibh. Sed euismod facilisis orci cursus
              dictum. Sed ac viverra ligula. Phasellus sagittis id tortor sed
              bibendum. Phasellus ac metus sem. Phasellus vulputate elit eu
              turpis fermentum ornare. Phasellus elementum dapibus tempor. Ut
              eleifend elit vel lacinia volutpat. Nam auctor felis in ipsum
              molestie mattis. Cras gravida ipsum purus, a posuere eros feugiat
              venenatis. Suspendisse a cursus quam. Curabitur tristique massa eu
              nisi accumsan, a rutrum nulla ullamcorper. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aenean gravida nibh mauris,
              vitae euismod est rhoncus vel.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    disply: 'flex',
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
    paddingHorizontal: wp('3%')
    // backgroundColor: 'yellow',
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
  titleText: {
    fontSize: hp('5%'),
  },
  text: {
    fontSize: 30,
  },
});

export default PrizeDisplayModal;
