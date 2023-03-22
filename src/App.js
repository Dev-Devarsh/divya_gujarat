import logo from './logo.svg';
import './App.css';
import Signup from '../src/containers/Signup';
import Landing from '../src/containers/Landing';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store/store";
import Logout from "../src/containers/Logout/index"
function App() {
  // const persistor = persistStore(store);

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <Routes>
             <Route path="/cart" element={<Logout/>} />
           {/* <Route path="/signin" element={<Signin />} />
            <Route path="/logout" element={<Logout />} /> */}
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
