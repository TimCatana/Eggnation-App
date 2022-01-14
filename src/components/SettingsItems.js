import React from 'react';
import { FlatList,  StyleSheet, Text, View, Pressable} from 'react-native';




const SingleSetting = ({ setting }) => {
  return (
    <Pressable style={styles.body} onPress={setting.onPressFunction}>
        <Text style={styles.title}>{setting.name} {setting.icon}</Text>
    </Pressable>
)};




const SettingsItems = (props) =>  {
  const {data} = props;

  const renderItem = ({ item }) => {
    return (
    <SingleSetting 
      setting={item}
    />
  )};

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'flex-start',
     marginHorizontal: 10,
     marginVertical: 5,
     paddingVertical: 10,
     borderRadius: 20,
     backgroundColor: "orange"
   },
   text: {
     fontSize: 50,
   }
});

export default SettingsItems;
