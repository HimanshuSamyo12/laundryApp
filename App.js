import React from "react";
import AppNavigator from "./AppNavigator.js";
import { GlobalVariableProvider } from "./Storage/globalData";
import { Provider } from "react-redux";
import { mystore } from "./redux/Store/Store.js";

const App = () => {
  return (
    <Provider store={mystore}>
    <GlobalVariableProvider>
      <AppNavigator />
    </GlobalVariableProvider>
    </Provider>
  );
};

export default App;
