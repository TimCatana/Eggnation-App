import React, {FC, useEffect} from 'react';
import {Animated} from 'react-native';

interface Props {
  style: any;
  duration: number;
  children: React.ReactNode;
}

const FadeIn: FC<Props> = props => {
  const {style, duration, children} = props;

  const fadeAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[style, {opacity: fadeAnimation}]}>
      {children}
    </Animated.View>
  );
};

export default FadeIn;
