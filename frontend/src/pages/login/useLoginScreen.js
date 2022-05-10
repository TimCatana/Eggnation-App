import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FBAuth, FBFirestore } from "../../firebase-config.js";
import { doc, getDoc } from "firebase/firestore";

const useLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(true);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/

  useEffect(() => {
    email != null && email.length > 6
      ? setEmailError(false)
      : setEmailError(true);
  }, [email]);

  useEffect(() => {
    password != null && password.length > 0
      ? setPasswordError(false)
      : setPasswordError(true);
  }, [password]);

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  const handleAuthenticate = async () => {
    if (!emailError && !passwordError) {
      try {
        const exists = await _isUserAdmin();
        if (exists) {
          await signInWithEmailAndPassword(FBAuth, email, password);
        }
      } catch (e) {
        console.log(`Failed to sign in --> ${e}`);
      }
    }
  };

  const _isUserAdmin = async () => {
    const adminDoc = doc(FBFirestore, `admins/${email}`);
    const result = await getDoc(adminDoc);
    return result.exists();
  };

  /**********************/
  /***** ANIMATIONS *****/
  /**********************/

  /******************************/
  /***** NAVIGATION HELPERS *****/
  /******************************/

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    handleEmailChange,
    emailError,
    handlePasswordChange,
    passwordError,
    handleAuthenticate,
  };
};

export default useLoginScreen;
