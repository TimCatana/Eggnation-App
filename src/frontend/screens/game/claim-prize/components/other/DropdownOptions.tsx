import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {CustomButton} from '../../../../../common/components';

interface DropdownProps {
  item: any;
  index: number;
  onSelect: (index: number) => void;
}

const DropdownOption: FC<DropdownProps> = props => {
  const {item, index, onSelect} = props;

  return (
    <View style={styles.body}>
      <CustomButton
        label={item.name}
        onPress={() => {
          onSelect(index);
        }}
        buttonEnabledColor={'black'}
        buttonDisabledColor={'black'}
        width={'100%'}
        textColor={'white'}
        fontSize={hp('2%')}
        elevation={0}
        disabled={false}
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
