import React, {FC} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
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
  password: string;
  handlePasswordChange: (value: string) => void;
  isPasswordError: boolean;
  isModalVisible: boolean;
  hidePasswordModal: () => void;
  handleOnConfirm: () => void;
}

const PasswordModal: FC<Props> = props => {
  const {
    isLoading,
    password,
    handlePasswordChange,
    isPasswordError,
    isModalVisible,
    hidePasswordModal,
    handleOnConfirm,
  } = props;

  return (
    <Modal
      style={{}}
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        if (!isLoading) {
          hidePasswordModal();
        }
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CustomTextInput
            value={password}
            onValueChange={handlePasswordChange}
            isError={false}
            errorText={''}
            disabled={isLoading}
            isPassword={true}
            placeholder={S_TI_PASSWORD_PLACEHOLDER}
            keyboardType={S_TI_PASSWORD_KEYBOARD_TYPE}
            maxLength={30}
            width={'90%'}
            height={hp('6.5%')}
            marginBottom={hp('0.6%')}
            fontSize={hp('2%')}
            textColor={C_TEXT_INPUT_TEXT_PRIMARY}
            unfocusedBorderColor={'gray'}
            focusedBorderColor={'pink'}
            returnKeyType={'done'}
          />

          <View style={styles.buttonView}>
            <CustomButton
              label={S_PM_CANCEL_BUTTON}
              onPress={() => {
                if (!isLoading) {
                  hidePasswordModal();
                }
              }}
              buttonEnabledColor={C_BUTTON_LIGHT}
              buttonDisabledColor={C_BUTTON_LIGHT}
              textColor={C_TEXT_INPUT_TEXT_PRIMARY}
              fontSize={hp('2%')}
              elevation={0}
              disabled={false}
            />

            <CustomButton
              label={S_PM_CONFIRM_BUTTON}
              onPress={handleOnConfirm}
              buttonEnabledColor={C_BUTTON_LIGHT}
              buttonDisabledColor={C_BUTTON_LIGHT}
              textColor={C_TEXT_INPUT_TEXT_PRIMARY}
              fontSize={hp('2%')}
              elevation={0}
              disabled={isLoading || isPasswordError}
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
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PasswordModal;
