import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import logoutUserUC from '../../../domain/logoutUserUC';
import {SETTINGS_SCREEN} from '../../util/NavigationConstants';
import {getLocalCountUC} from '../../../domain/getLocalCountUC';
import {decrementLocalCountUC} from '../../../domain/decrementLocalCountUC';
import {checkIfTimeToResetCountUC} from '../../../domain/checkIfTimeToResetCountUC';
import {mainGameLogicUC} from '../../../domain/mainGameLogicUC';

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [localCount, setLocalCount] = useState(1000);

  useEffect(() => {
    initCounter();
    setIsLoading(false);
  }, []);

  const initCounter = async () => {
    await checkIfTimeToResetCountUC();
    await getLocalCount();
  };

  const getLocalCount = async () => {
    const result = await getLocalCountUC();

    if (result !== false) {
      setLocalCount(result);
    }
  };

  const playGame = async () => {
    await decrementAndGetLocalCount();
    await mainGameLogicUC();
  };

  // TODO - need to make this more efficient. Apparently, redux has a listener feature. Async does not
  const decrementAndGetLocalCount = async () => {
    try {
      await decrementLocalCountUC();
      await getLocalCount();
    } catch (e) {
      console.log('failed to update local count');
    }
  };

  if (isLoading) return null;

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{localCount}</Text>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="logout"
        onPress={() => {
          logoutUserUC();
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate(SETTINGS_SCREEN);
        }}
      />
      <Button
        title="play game"
        onPress={async () => {
          await playGame();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
  },
});

export default HomeScreen;
