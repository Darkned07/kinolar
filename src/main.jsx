import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" reverseOrder={false} />

    <Provider store={store}>
      <App />
    </Provider>
  </>
);
