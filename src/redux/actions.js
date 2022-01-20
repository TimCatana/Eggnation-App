export const LOGIN_USER = 'LOGIN_USER'
export const SET_LOCAL_TAPS = 'SET_LOCAL_TAPS';
export const SET_USER = 'SET_USER'
export const SET_SELECTED_SKIN = 'SET_SELECTED_SKIN'

import auth from '@react-native-firebase/auth';
import FirestoreInterface from '../FirestoreInterface';
import RealtimeInterface from '../RealtimeInterface';

const fsi = new FirestoreInterface();
const rti = new RealtimeInterface();








export const login = (email, password) => async () => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.log("failed to login: " + err);
  }
}

export const register = (username, email, password) => async () => {
  try {
    await auth().createUserWithEmailAndPassword(email, password)
    .then((userCredentials) => {
      fsi.createUser(userCredentials.user.uid, username, email);
      userCredentials.user.updateProfile({
        displayName: username,
      });
    })
  } catch (err) {
    // TODO - User should also get a UI message
    console.log('Error on sign up: ', err);
  }
}




export const verifyEmail = (email, password) => async () => {
  // try {
  //   await auth().currentUser.sendEmailVerification();
  // } catch (err) {
  //   console.log("failed to login: " + err);
  // }


await firebase
        .auth()
        .currentUser.sendEmailVerification(actionCodeSettings)
        .then(() => {
          //useState used on my loading (user can cancel this loading and exit               this task
          setTextContent('Waiting for verification. Check your email!\nYou can close this verification and came back later');
          const unsubscribeOnUserChanged = firebase
            .auth()
            .onUserChanged(response => {
               const unsubscribeSetInterval = setInterval(() => {//this works as a next in for-like
                  firebase.auth().currentUser.reload();
               }, 30000);
              if (response.emailVerified) {
                 clearInterval(unsubscribeSetInterval); //stop setInterval
                setLoading(false); //close loading describes above
                navigation.goBack(); //return to parent (in my case to profile)
                return unsubscribeOnUserChanged(); //unsubscribe onUserChanged
              } 
            });
        })
        .catch(error => {
          setLoading(false); 
          setError(true);
          errorHandle(error);
        });
}



// TODO - google login
// googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const { idToken } = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(googleCredential)
        //     // Use it only when user Sign's up, 
        //     // so create different social signup function
        //     // .then(() => {
        //     //   //Once the user creation has happened successfully, we can add the currentUser into firestore
        //     //   //with the appropriate details.
        //     //   // console.log('current User', auth().currentUser);
        //     //   firestore().collection('users').doc(auth().currentUser.uid)
        //     //   .set({
        //     //       fname: '',
        //     //       lname: '',
        //     //       email: auth().currentUser.email,
        //     //       createdAt: firestore.Timestamp.fromDate(new Date()),
        //     //       userImg: null,
        //     //   })
        //     //   //ensure we catch any errors at this stage to advise us if something does go wrong
        //     //   .catch(error => {
        //     //       console.log('Something went wrong with added user to firestore: ', error);
        //     //   })
        //     // })
        //     //we need to catch the whole sign up process if it fails too.
        //     .catch(error => {
        //         console.log('Something went wrong with sign up: ', error);
        //     });
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },






export const logout = () => async () => {
  try {
    await auth().signOut();
  } catch (err) {
    console.log("failed to logout: " + err);
  }
}






export const setUser = user => dispatch => {
  dispatch({
    type: SET_USER,
    payload: user, 
  })
};


export const setCount = taps => dispatch => {
  dispatch({
    type: SET_LOCAL_TAPS,
    payload: taps, 
  })
};

export const setSelectedSkin = skin => dispatch => {
  dispatch({
    type: SET_SELECTED_SKIN,
    payload: skin, 
  })
};



// export const incrementUserAds = ads => dispatch => {
//   dispatch({
//     type: INCREMENT_USER_ADS,
//     payload: ads, 
//   })
// };