import React, {FC} from 'react';
import {View, StyleSheet, FlatList, Modal} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_ICON_LIGHT} from '../../../../../../constants/Colors';
import {PressableIcon} from '../../../../../common/components';
import DropdownOption from './DropdownOptions';
import {Country, Region} from '../../../../../../constants/typeAliases';

interface PickerModalProps {
  hideModalPicker: () => void;
  isModalVisible: boolean;
  data: any; // TODO - make this a specific country | region type
  onSelect: (index: number) => void;
}

const PickerModal: FC<PickerModalProps> = props => {
  const {hideModalPicker, isModalVisible, data, onSelect} = props;
  const ITEM_HEIGHT = hp('5%');

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <DropdownOption item={item} index={index} onSelect={onSelect} />
  );

  /**
   * Adding this stops the list from getting blocked while scrolling,
   * but leaves gaps in the list if you scroll too fast
   * @param data
   * @param index
   * @returns
   */
  const getItemLayout = (data: any, index: number) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  };

  const keyExtractor = (item: Country | Region) => item.name;

  return (
    <Modal
      style={styles.body}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={hideModalPicker}>
      <View style={styles.body}>
        <PressableIcon
          icon={'arrow-left'}
          onPress={hideModalPicker}
          viewStyle={styles.icon}
          iconStyle={{}}
          iconSize={hp('3.5%')}
          iconColor={C_ICON_LIGHT}
        />
        <View style={styles.topView}>
          <FlatList
            style={styles.prizeList}
            data={data}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            // getItemLayout={getItemLayout} // Need to optimize this after release
            initialNumToRender={50}
            windowSize={31}
            keyExtractor={keyExtractor}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  prizeList: {},
  body: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
  },
  topView: {
    flex: 19,
  },
  icon: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: wp('1%'),
    paddingTop: hp('1%'),
  },
});

export default PickerModal;
