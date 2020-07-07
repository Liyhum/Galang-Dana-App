import { StatusBar } from "expo-status-bar";
import React, { createContext, useReducer, useEffect, useState } from "react";
import { YellowBox, AsyncStorage } from "react-native";
import Navigation from "./src/Navigation/Navigation";
import {
  useFonts,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_400Regular,
} from "@expo-google-fonts/open-sans";
import { AppLoading, Font } from "expo";
import { HomeProvider } from "./src/Context/HomeContext";

export const State = createContext();
export const Dispatch = createContext();

const initState = {
  uid: false,
};
const reducer = (action, state) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        uid: true,
      };
    case "logout":
      return { 
        ...state, 
        uid: false 
      };
    default:
      return state;
  }
};

const App = () => {
  let fontsLoaded = useFonts({
    OpenSans_400Regular_Italic,
    OpenSans_600SemiBold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  console.disableYellowBox = true;
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <HomeProvider>
      <State.Provider value={state}>
        <Dispatch.Provider value={dispatch}>
          <Navigation />
        </Dispatch.Provider>
      </State.Provider>
    </HomeProvider>
  );
};
export default App;
