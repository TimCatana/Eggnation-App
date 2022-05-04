import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  C_BUTTON_TRANSPARENT,
  C_TEXT_LIGHT,
} from '../../../../../../constants/Colors';
import {CustomButton} from '../../../../../common/components';

interface Props {
  item: any;
  index: number;
  onSelect: (index: number) => void;
}

const DropdownOption: FC<Props> = props => {
  const {item, index, onSelect} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={item.name}
        onPress={() => {
          onSelect(index);
        }}
        disabled={false}
        width={'100%'}
        buttonEnabledColor={C_BUTTON_TRANSPARENT}
        buttonDisabledColor={C_BUTTON_TRANSPARENT}
        textColor={C_TEXT_LIGHT}
        fontSize={hp('2%')}
        elevation={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: hp('5%'),
    display: 'flex',
    borderBottomWidth: wp('0.2%'),
  },
});

export default DropdownOption;
