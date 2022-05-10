import React from "react";
import Routes from "./Routes.js";

/**
 * There are two stacks, the AuthStack and the AppStack.
 * Which one is displayed is determined whether the user is logged
 * in or not. The entire app is surrounded by the redux store which
 * handles whether the user is logged in or not
 */
const Providers = () => {
  return <Routes />;
};

export default Providers;
