import React from "react";

export const HomeContext = React.createContext();

export const HomeProvider = (props) => {
  const [homeIdContext, setHomeIdContext] = React.useState("");
  console.log("ic", homeIdContext);
  return (
    <HomeContext.Provider value={[homeIdContext, setHomeIdContext]}>
      {props.children}
    </HomeContext.Provider>
  );
};
