import React, {FC, useEffect} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

interface Props {
  duration: number;
  flashTrigger: number;
  children: React.ReactNode;
}

const FadeIn: FC<Props> = props => {
  const {duration, flashTrigger, children} = props;

  const fadeAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [flashTrigger]);

  return (
    <View style={styles.body}>
      <Animated.View style={{opacity: fadeAnimation}}>
        {children}
      </Animated.View>
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

export default FadeIn;
