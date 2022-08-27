import React from 'react';
import './style.css';
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="text-center">
      <Header />
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/users'} element={<Users/>} />
        </Routes>
    </div>
  );
}

export default App;
