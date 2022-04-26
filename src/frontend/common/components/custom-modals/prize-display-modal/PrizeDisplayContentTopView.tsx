import React, {FC} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
  displayImage: any;
}

const PrizeDisplayContentTopView: FC<Props> = props => {
  const {displayImage} = props;

  return (
    <View style={styles.body}>
      <Image
        style={styles.displayImage}
        resizeMode="contain"
        source={displayImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: hp('30%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayImage: {
    width: '75%',
    height: '75%',
  },
});

export default PrizeDisplayContentTopView;
