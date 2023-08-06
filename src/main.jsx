import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistStor } from "/src/redux/store";
import App from "/src/components/App";
// import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
