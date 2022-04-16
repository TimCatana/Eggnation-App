import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  Modal,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {C_TEXT_PRIMARY, C_ICON_PRIMARY} from '../../../../../theme/Colors'
import TopLeftCornerIcon from '../../../../../common/components/top-left-corner-icon/TopLeftCornerIcon';

const DropdownOption = props => {
  const {item, index, onSelect, isSelectingCountries} = props;

  return (
    <View
      style={{
        width: '100%',
        height: hp('4.5%'),
        display: 'flex',
        paddingLeft: wp('3%'),
        borderBottomWidth: wp('0.2%'),
      }}>
      <Pressable
        style={{flex: 1, display: 'flex', justifyContent: 'center'}}
        onPress={() => {
          onSelect(index);
        }}>
        <Text style={{fontSize: hp('1.7%'), color: C_TEXT_PRIMARY}}>
          {isSelectingCountries ? item.countryName : item.name}
        </Text>
      </Pressable>
    </View>
  );
};

const PickerModal = props => {
  const {
    hideModalPicker,
    isModalVisible,
    data,
    onSelect,
    isSelectingCountries,
  } = props;

  return (
    <Modal
      style={styles.body}
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={hideModalPicker}>
      <View style={styles.body}>
        <TopLeftCornerIcon
          icon={'arrow-left'}
          onPress={hideModalPicker}
          viewStyle={styles.icon}
          iconStyle={{}}
          iconSize={hp('3.5%')}
          iconColor={C_ICON_PRIMARY}
        />
        <View style={styles.topView}>
          <FlatList
            style={styles.prizeList}
            data={data}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <DropdownOption
                item={item}
                index={index}
                onSelect={onSelect}
                isSelectingCountries={isSelectingCountries}
              />
            )}
            keyExtractor={item =>
              isSelectingCountries ? item.countryName : item.name
            }
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    disply: 'flex',
  },
  topView: {
    flex: 19,
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // backgroundColor: 'red',
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
