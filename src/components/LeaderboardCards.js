import React from 'react';
import { FlatList,  StyleSheet, Text, View} from 'react-native';




const SingleUser = ({ name, count }) => {
  return (
    <View style={styles.body}>
        <Text style={styles.title}>{name} {count}</Text>
    </View>
)};




const LeaderboardCards = (props) =>  {
  const {data, getHistoryFunc, refreshing} = props;

  const renderItem = ({ item }) => {
    return (
    <SingleUser 
      name={item.username} 
      count={item.count}
    />
  )};

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.username}
        numColumns={1}
        refreshing={refreshing}
        onRefresh={getHistoryFunc}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 50,
   }
});

export default LeaderboardCards;
