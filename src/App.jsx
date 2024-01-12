import React from "react";

import { useDispatch } from "react-redux";
import Sidebar from "./component/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar></Sidebar>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
