import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SettingsItems from '../../components/SettingsItems'; 
import {logout} from '../../redux/actions'
import SimpleSetting from '../../components/settings-components/SimpleSetting';









const SettingsScreen = () =>  {
  const [modalVisible, setModalVisible] = useState(false);
  const [verifiedButtonDisables, setVerifiedButtonDisabled] = useState(true);
  const {user} = useSelector(state => state.userReducer)

  const dispatch = useDispatch();

  /**
   * The profile settings
   */
  const profileSettings ={ 
    sectionName: "PROFILE",
    sectionSettings: [
      {
        name: 'Avatar',
        icon: "userIcon",
        actionIcon: "arrow icon",
        isLastItem: false,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          console.log('change avatar icon');
        }
      },
      {
        name: `${user.displayName}`,
        icon: "userIcon",
        actionIcon: "arrow icon",
        isLastItem: false,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          console.log('change username by using user.updateProfile({displayName: "newname"})');
        }
      },
      {
        name: "email", 
        icon: "email Icon",
        actionIcon: "checkmark or X icon",
        isLastItem: true,
        content: function() {
          return(
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
          />
          );
        },
        onPressFunction: function() {  
    
          if(!user.emailVerified) {
            // user.sendEmailVerification();  // TODO - need to get the user somehow
            setModalVisible(true);
            setVerifiedButtonDisabled(true);
            setTimeout(() => { // Set verified button disabled for 5 seconds so that user can read and go to email instead of clicking the button prematurely.
              setVerifiedButtonDisabled(false);
              console.log('enabled');
            }, 5000)
          } else {
            console.log('email already verified'); // TODO - probably only set this button visible if email is not verified
          }
        }
      }
    ]
  }

  /**
   * The theme settings
   */
  const themeSettings ={ 
    sectionName: "THEME",
    sectionSettings: [
      {
        name: `dark`,
        icon: "themeicon",
        actionIcon: "switch icon",
        isLastItem: true,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          console.log('change theme');
        }
      }
    ]
  }

  /**
   * The legal settings 
   */
  const legalSettings ={ 
    sectionName: "LEGAL",
    sectionSettings: [
      {
        name: 'terms of service',
        icon: "themeicon",
        actionIcon: "arrow icon",
        isLastItem: false,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          console.log('go to terms page');
        }
      },
      {
        name: 'Privacy policy',
        icon: "themeicon",
        actionIcon: "arrow icon",
        isLastItem: true,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          console.log('go to privacy policy page');
        }
      }
    ]
  }

  /**
   * The logout setting
   */
  const signOutSettings = { 
    sectionName: "EggNation Version 1.0.0",
    sectionSettings: [
      {
        name: 'logout',
        icon: "",
        actionIcon: "",
        isLastItem: true,
        content: function() {
          return (
            <SimpleSetting
              onPressFunction={this.onPressFunction}
              settingText={this.name}
              settingIcon={this.icon}
              isLastItem={this.isLastItem}
            />
          );
        },
        onPressFunction: function() {
          dispatch(logout());
        }
      }
    ]
  }




  // const settings = [

  //   {
  //     name: "theme", 
  //     icon: "theme Icon",
  //     onPressFunction: function() {  
  //       console.log('change theme');
  //     }
  //   },
  //   {
  //     name: "item1", 
  //     icon: "item1 Icon",
  //     lastItem: false,
  //     onPressFunction: function() {  
  //       console.log('change item1');
  //     }
  //   },
  //   {
  //     name: "item2", 
  //     icon: "item2 Icon",
  //     lastItem: false,
  //     onPressFunction: function() {  
  //       console.log('change item2');
  //     }
  //   },
  //   {
  //     name: "item3", 
  //     icon: "item3 Icon",
  //     lastItem: false,
  //     onPressFunction: function() {  
  //       console.log('change item3');
  //     }
  //   },
  //   {
  //     name: "logout", 
  //     icon: "logout Icon",
  //     lastItem: true,
  //     onPressFunction: function() {  
  //       dispatch(logout());
  //     }
  //   }
  // ]



  const checkEmailVerification = () => {
    user.reload();

    if(user.emailVerified) {
      console.log('email verified successfully!');
    } else {
      console.log('failed to verify email');
    }

    setModalVisible(!modalVisible)
  }
  

    // TODO - show a modal
    // TODO - add a "resend verification email button" that reruns the send emailverification
    // TODO - add a 'verified' button that reloads the current user.



  return (
    <View style={styles.page}>
       <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalPage}>
          <View style={styles.modalView}>
            {/* <View style={styles.modalHeader}> */}
              <Text style={styles.text}>Check your email and click the verification link. After that come back here and click 'verify'</Text>
            {/* </View> */}
            {/* <View style={styles.modalBody}> */}
              
            {/* </View> */}
            {/* <View style={styles.modalFooter}> */}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              disabled={verifiedButtonDisables}
              onPress={checkEmailVerification} 
            >
              <Text style={styles.textStyle}>Verified</Text>
            </Pressable>
            {/* </View> */}
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <Text style={styles.headingText}>EggNation</Text> 
        <Text style={styles.headingText}>social media icons</Text> 
      </View>
      <View style={styles.body}>
        <SettingsItems data={profileSettings}/>
        <SettingsItems data={themeSettings}/>
        <SettingsItems data={legalSettings}/>
        <SettingsItems data={signOutSettings}/>
      </View>

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      {/* <Modal
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
          if(!user.emailVerified) {
          user.sendEmailVerification();
          setModalVisible(true)
          } else {
            console.log('email already verified'); // TODO - probably only set this button visible if email is not verified
          }
        }} 
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: "blue",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#010101"
  },
  body: {
    flex: 3,
    backgroundColor: "#010101"
  },
  modalPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },  
  modalView: {
    margin: 20,
    padding: 150, //TODO - set passing according to height dimension.
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
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
  modalHeader: {
    // flex: 1,
    backgroundColor: "purple"
  },
  // modalBody: {
  //   flex: 1,
  //   backgroundColor: "aqua"
  // }, 
  // modalFooter: {
  //   flex: 1,
  //   backgroundColor: "grey"
  // },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "white"
  },
  headingText: {
    fontSize: 40,
    color: "white"
  }
});

export default SettingsScreen;