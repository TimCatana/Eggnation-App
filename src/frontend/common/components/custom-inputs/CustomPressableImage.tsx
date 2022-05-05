import React, {FC} from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';

interface Props {
  image: any;
  style: any;
  onPress: () => void;
  disabled: boolean;
}

const CustomPressableImage: FC<Props> = props => {
  const {image, style, onPress, disabled} = props;

  return (
    <Pressable style={style} onPress={onPress} disabled={disabled}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
});

export default CustomPressableImage;
