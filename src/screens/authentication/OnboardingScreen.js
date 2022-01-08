import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

/**
 * The set of dots at the bottom of the onboarding page representing which page
 * the user is currently on.
 * @param {Boolean} selected Represents whether we are on the current page or not 
 */
const Dots = ({selected}) => {
  let backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
  return (
    <View style={{ width:6, height: 6, marginHorizontal: 3, backgroundColor }} />
  );
}

/**
 * The skip button on the onboarding page which should go to the login page when clicked.
 * @param {*} props an optional set of TouchableOpacity props. Can be null/undefined.
 */
const Skip = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

/**
 * The next button on the onboarding page which should go to the next page when clicked.
 * Should not appear on the last page.
 * @param {*} props an optional set of TouchableOpacity props. Can be null/undefined.
 */
const Next = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

/**
 * The done button on the onboarding page which should go to the login page when clicked.
 * Should only appear on the last page.
 * @param {*} props an optional set of TouchableOpacity props. Can be null/undefined.
 */
const Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

/**
 * The onboarding screen which should appear when the user first opens the app.
 * The user should always end up on the login screen from here.
 * @param navigation 
 */
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={() => navigation.replace("Login")}
    onDone={() => navigation.navigate("Login")}
    pages={[
      {
        backgroundColor: '#a6e4d0', // TODO - change colours to something nicer
        image: <Image style={styles.image} source={require('../../../assets/egg.png')} />,
        title: 'Eggs,',
        subtitle: 'Eggs!',
      },
      {
        backgroundColor: '#e9bcbe', // TODO - change colours to something nicer
        image: <Image style={styles.image}  source={require('../../../assets/egg_tap_1.png')} />,
        title: 'Eggs,',
        subtitle: 'Eggs!',
      },
      {
        backgroundColor: '#fdeb93', // TODO - change colours to something nicer
        image: <Image style={styles.image}  source={require('../../../assets/egg_tap_2.png')} />,
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
