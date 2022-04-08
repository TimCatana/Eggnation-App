import React from 'react';
import {View, Text, StyleSheet, Pressable, FlatList, Modal} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TopLeftCornerIcon from '../../../../components/common/TopLeftCornerIcon';

const PickerModal = props => {
  const {hideModalPicker, isModalVisible, data, onSelect} = props;

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
        />
        <View style={styles.topView}>
          <FlatList
            style={styles.prizeList}
            data={data}
            numColumns={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  onPress={() => {
                    onSelect(index);
                  }}>
                  <Text>{item.countryName}</Text>
                </Pressable>
              );
            }}
            keyExtractor={item => item.countryName}
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
    flex: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
