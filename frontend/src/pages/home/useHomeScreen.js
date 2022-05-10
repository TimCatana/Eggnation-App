import { useState, useEffect } from "react";
import { FBAuth, FBFirestore } from "../../firebase-config.js";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const useHomeScreen = () => {
  const [collection, setCollection] = useState("available-prizes");
  const [collectionError, setCollectionError] = useState(true);

  const [prizeId, setPrizeId] = useState("");
  const [prizeIdError, setPrizeIdError] = useState(true);

  const [prizeTitle, setPrizeTitle] = useState("");
  const [prizeTitleError, setPrizeTitleError] = useState(true);

  const [prizeDesc, setPrizeDesc] = useState("");
  const [prizeDescError, setPrizeDescError] = useState(true);

  const [prizeTier, setPrizeTier] = useState("bronze");
  const [prizeTierError, setPrizeTierError] = useState(false);

  const [prizeType, setPrizeType] = useState("phone");
  const [prizeTypeError, setPrizeTypeError] = useState(false);

  const [prizeClaimType, setPrizeClaimType] = useState("shipment");
  const [prizeClaimTypeError, setPrizeClaimTypeError] = useState(false);

  /***********************/
  /***** USE EFFECTS *****/
  /***********************/
  // useEffect(() => {
  //   signOut(FBAuth)
  // }, [])

  useEffect(() => {
    // console.log(collection);

    collection != null && collection.length > 6
      ? setCollectionError(false)
      : setCollectionError(true);
  }, [collection]);

  useEffect(() => {
    // console.log(prizeId);
    // console.log(prizeIdError);

    prizeId != null && prizeId.length > 6
      ? setPrizeIdError(false)
      : setPrizeIdError(true);
  }, [prizeId]);

  useEffect(() => {
    // console.log(prizeTitle);
    // console.log(prizeTitleError);

    prizeTitle != null && prizeTitle.length > 0
      ? setPrizeTitleError(false)
      : setPrizeTitleError(true);
  }, [prizeTitle]);

  useEffect(() => {
    // console.log(prizeDesc);
    // console.log(prizeDescError);

    prizeDesc != null && prizeDesc.length > 0
      ? setPrizeDescError(false)
      : setPrizeDescError(true);
  }, [prizeDesc]);

  useEffect(() => {
    // console.log(prizeTier);
    // console.log(prizeTierError);

    prizeTier != null && prizeTier.length > 0
      ? setPrizeTierError(false)
      : setPrizeTierError(true);
  }, [prizeTier]);

  useEffect(() => {
    // console.log(prizeType);
    // console.log(prizeTypeError);

    prizeType != null && prizeType.length > 0
      ? setPrizeTypeError(false)
      : setPrizeTypeError(true);
  }, [prizeType]);

  useEffect(() => {
    // console.log(prizeClaimType);
    // console.log(prizeClaimTypeError);

    prizeClaimType != null && prizeClaimType.length > 0
      ? setPrizeClaimTypeError(false)
      : setPrizeClaimTypeError(true);
  }, [prizeClaimType]);

  /***********************/
  /***** TEXT INPUTS *****/
  /***********************/
  const handleCollectionChange = (e) => {
    setCollection(e.target.value);
  };

  const handlePrizeIdChange = (e) => {
    setPrizeId(e.target.value);
  };

  const handlePrizeTitleChange = (e) => {
    setPrizeTitle(e.target.value);
  };

  const handlePrizeDescChange = (e) => {
    setPrizeDesc(e.target.value);
  };

  const handlePrizeTierChange = (e) => {
    setPrizeTier(e.target.value);
  };

  const handlePrizeTypeChange = (e) => {
    setPrizeType(e.target.value);
  };

  const handlePrizeClaimTypeChange = (e) => {
    setPrizeClaimType(e.target.value);
  };

  /*************************/
  /***** BUTTON CLICKS *****/
  /*************************/

  const handleAddPrizeToDB = async () => {
    if (
      !prizeIdError &&
      !prizeTitleError &&
      !prizeDescError &&
      !prizeTierError &&
      !prizeTypeError &&
      !prizeClaimTypeError
    ) {
      try {
        console.log("Adding to firestore...");
        await _addToFirestore();
        console.log("Added prize successfully");
      } catch (e) {
        console.log(`Failed to add to firestore --> ${e}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(FBAuth);
    } catch (e) {
      console.log(`Failed to sign out --> ${e}`);
    }
  };

  /*************************/
  /***** CLICK HELPERS *****/
  /*************************/

  const _addToFirestore = async () => {
    const document =
      collection === "available-prizes"
        ? doc(FBFirestore, `available-prizes/${prizeId}`)
        : doc(FBFirestore, `contest-prizes/${prizeId}`);

    await setDoc(document, {
      prizeId: prizeId,
      prizeTitle: prizeTitle,
      prizeDesc: prizeDesc,
      prizeTier: prizeTier,
      prizeType: prizeType,
      prizeClaimType: prizeClaimType,
    });
  };

  /*******************/
  /***** RETURNS *****/
  /*******************/

  return {
    collectionError,
    handleCollectionChange,
    prizeIdError,
    handlePrizeIdChange,
    prizeTitleError,
    handlePrizeTitleChange,
    prizeDescError,
    handlePrizeDescChange,
    prizeTierError,
    handlePrizeTierChange,
    prizeTypeError,
    handlePrizeTypeChange,
    prizeClaimTypeError,
    handlePrizeClaimTypeChange,
    handleAddPrizeToDB,
    handleLogout,
  };
};

export default useHomeScreen;
