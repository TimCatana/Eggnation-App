import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal
} from 'react-native';
import { useSelector } from 'react-redux';
 
const SettingsScreen = () =>  {
  const [modalVisible, setModalVisible] = useState(false);
  const {user} = useSelector(state => state.userReducer)
  

    // TODO - show a modal
    // TODO - add a "resend verification email button" that reruns the send emailverification
    // TODO - add a 'verified' button that reloads the current user.



  // await user.sendEmailVerification();

  // setTimeout(() => {
  //   user.reload();

  //   if(!user.emailVerified) {
  //     console.log('account not verified!');
  //   } else {
  //     console.log('account verified');
  //   }
  // }, 10000)

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Check your email for a verification link and click 'verified' when your done.</Text>
           


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                user.reload();

                if(user.emailVerified) {
                  console.log('email verified successfully!');
                } else {
                  console.log('failed to verify email');
                }

                setModalVisible(!modalVisible)
              }
              } 
            >
              <Text style={styles.textStyle}>Verified</Text>
            </Pressable>
           
           
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          // user.sendEmailVerification();
          setModalVisible(true)
        }} 
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default SettingsScreen;
