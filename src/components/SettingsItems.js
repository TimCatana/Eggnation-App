import React from 'react';
import { FlatList,  StyleSheet, Text, View, Pressable, Label, Settings} from 'react-native';




const SingleSetting = (props) => {
  const {setting} = props
  return(setting.content())
};




const SettingsItems = (props) =>  {
  const {data} = props;

  const renderItem = ({ item }) => {
    return (
    <SingleSetting 
      setting={item}
    />
  )};

  return (
    <View style={styles.settingSectionView}>
      <Text style={styles.labelText}>{data.sectionName}</Text>
      <View style={styles.body}>
        <FlatList
          data={data.sectionSettings}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          numColumns={1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingSectionView: {
    paddingBottom: 20,
  },
  labelText: {
    fontSize: 13,
    color: "#A5A5A5",
    marginLeft: 15,
    marginBottom: 7
   },
   body: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: "#1d1d1d",
    alignItems: 'stretch',
   },
   itemBody: {
     paddingVertical: 3,
    borderBottomWidth: 0.5,
    borderColor: "#5B5B5B",
    marginLeft: 15,
    justifyContent: 'flex-start'
  },
  lastItemBody: {
    paddingVertical: 3,
  //  borderBottomWidth: 1,
   borderColor: "#5B5B5B",
   marginLeft: 15,
   justifyContent: 'flex-start'
 },
   title: {
     fontSize: 20,
     color: "white",
    //  textAlignVertical: 'center',
    //  paddingLeft: 15,
     marginVertical: 5,
   },

});

export default SettingsItems;
