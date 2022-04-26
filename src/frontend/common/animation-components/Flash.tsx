import React, {FC, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

interface Props {
  duration: number;
  onAnimationFinish: () => void;
  isFlashAnimationPlaying: boolean;
  children: React.ReactNode;
  style: any;
}

const Flash: FC<Props> = props => {
  const {
    style,
    onAnimationFinish,
    duration,
    isFlashAnimationPlaying,
    children,
  } = props;

  const fadeAnimation = new Animated.Value(0);

  const fadeIn = () => {
    return Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    });
  };

  const fadeOut = () => {
    return Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    });
  };

  useEffect(() => {
    if (isFlashAnimationPlaying) {
      fadeIn().start(onAnimationFinish);
    } else {
      fadeOut().start();
    }
  }, [isFlashAnimationPlaying]);

  return (
    <View style={style}>
      <Animated.View style={{opacity: fadeAnimation}}>{children}</Animated.View>
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

export default Flash;
