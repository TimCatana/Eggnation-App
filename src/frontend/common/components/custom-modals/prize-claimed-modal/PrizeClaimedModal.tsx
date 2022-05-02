import React, {FC} from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  S_TI_PASSWORD_PLACEHOLDER,
  S_TI_PASSWORD_KEYBOARD_TYPE,
  S_PM_CANCEL_BUTTON,
  S_PM_CONFIRM_BUTTON,
} from '../../../../theme/Strings';
import {
  C_BUTTON_LIGHT,
  C_TEXT_INPUT_TEXT_PRIMARY,
} from '../../../../theme/Colors';
import {CustomTextInput, CustomButton} from '../../index';

interface Props {
  isLoading: boolean;
  isModalVisible: boolean;
  navigateBack: () => void;
}

const PrizeClaimedModal: FC<Props> = props => {
  const {isLoading, isModalVisible, navigateBack} = props;

  return (
    <Modal
      style={{}}
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          navigateBack();
        }
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.topView}>
            <Text style={{fontSize: hp('2.5%'), textAlign: 'left'}}>
              Success!
            </Text>
          </View>

          <View style={styles.centerView}>
            <Text style={{fontSize: hp('1.8%'), textAlign: 'left'}}>
              Your prize has been claimed! We will email you about further details
              from eggnationprizes@outlook.com
            </Text>
          </View>

          <View style={styles.bottomView}>
            <CustomButton
              label={'OK'}
              onPress={() => {
                if (!isLoading) {
                  navigateBack();
                }
              }}
              buttonEnabledColor={C_BUTTON_LIGHT}
              buttonDisabledColor={C_BUTTON_LIGHT}
              textColor={C_TEXT_INPUT_TEXT_PRIMARY}
              fontSize={hp('2%')}
              elevation={0}
              disabled={false}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: wp('90%'),
    height: hp('20%'),
    display: 'flex',
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  topView: {
    flex: 3,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerView: {
    flex: 5,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 4,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default PrizeClaimedModal;
