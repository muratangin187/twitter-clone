import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      {/* <Login /> */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
