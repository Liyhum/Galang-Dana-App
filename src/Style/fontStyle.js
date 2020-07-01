import React from "react";

import {
  useFonts,
  OpenSans_400Regular_Italic,
} from "@expo-google-fonts/open-sans";
import { AppLoading } from "expo";

const Setting = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
};

export const Font = {
  openSans: "OpenSans_400Regular_Italic",
};
