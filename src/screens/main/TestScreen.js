import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

const handleRotation = (progress) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`
}

const TestScreen = () =>  {

  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}]
    }
  }, []);

  useEffect(() => {
    progress.value = withTiming(0.5);
    scale.value = withRepeat(withSpring(2), 2, true);
  }, [])

  return (
    <View style={styles.body}>
      <Animated.View 
        style={[ 
          {height: 100, width: 100, backgroundColor: 'blue'}, 
          reanimatedStyle 
        ]} />
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

export default TestScreen;
