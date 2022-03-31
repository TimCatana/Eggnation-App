import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SettingsSection = props => {
  const {label, settingsJSON} = props;

  return (
    <View style={styles.settingSectionView}>
      <Text style={styles.text}>label</Text>

      {/* {settingsJSON.map(() => (
        <View> </View>
      ))} */}

      {/* <Text style={styles.labelText}>{data.sectionName}</Text>
      <View style={styles.body}>
        <FlatList
          data={data.sectionSettings}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={1}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: wp('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    fontSize: 50,
  },
});

export default SettingsSection;
