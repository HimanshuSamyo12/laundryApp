import React from "react";
import AppNavigator from "./AppNavigator.js";
import { GlobalVariableProvider } from "./Storage/globalData";
import { Provider } from "react-redux";
import { mystore } from "./newredux/MyStore.js";

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
