import React from "react";
import AppNavigator from "./AppNavigator.js";
import { GlobalVariableProvider } from "./Storage/globalData";

const App = () => {
  return (
    
    <GlobalVariableProvider>
      <AppNavigator />
    </GlobalVariableProvider>
     );
};

export default App;
