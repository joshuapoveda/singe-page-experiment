import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log('TEST')
  }

  return (
    <div>
      <BrowserRouter>
        <Nav isOpen={isOpen} toggle={toggle}></Nav>
        <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
