import React, { useState } from "react";
import Credential from "./Components/Credential";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  window.onscroll = ()=>{
    let bar = document.querySelector('.progress-bar');
    let doc = document.documentElement;
    let body = document.body;
    let top = body.scrollTop || doc.scrollTop;
    let height = doc.scrollHeight - doc.clientHeight;
    let progress = (top/height)*100;
    bar.style.width = progress + '%';
  }
  return (
    <>
        <div className="progress-bar"></div>
      <Routes>
        <Route path="/" element={<Contact/>}></Route>
        <Route path="/credential" element={<Credential/>}></Route>
        <Route path="*" element="Page Not Fount"/>
      </Routes>
    </>
  );
};

export default App;
