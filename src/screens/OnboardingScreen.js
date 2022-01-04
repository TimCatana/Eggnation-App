import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("LoginScreen")}
        onDone={() => navigation.navigate("LoginScreen")}
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image style={styles.image} source={require('../../assets/egg.png')} />,
            title: 'Eggs,',
            subtitle: 'Eggs!',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image style={styles.image}  source={require('../../assets/egg_tap_1.png')} />,
            title: 'Eggs,',
            subtitle: 'Eggs!',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image style={styles.image}  source={require('../../assets/egg_tap_2.png')} />,
            title: 'And more eggs!',
            subtitle: "More eggs!",
          },
        ]}
      />
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 150,
  }
});

export default OnboardingScreen;
