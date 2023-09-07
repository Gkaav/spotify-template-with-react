import React from "react";

import ThreeDots from "./components/UI/ThreeDots";
import Navbar from "./components/LeftBar/NavBarItems";
import Library from "./components/LeftBar/Library";

import './App.css'

const App = () => {
  return (
    <div className="spotify">
      <div className="LeftBar">
        <ThreeDots />
        <Navbar />
        <Library />
      </div>
      <div className="RightBar">
      
      </div>
    </div>
  );
};

export default App;
