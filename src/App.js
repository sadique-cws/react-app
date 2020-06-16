import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Banner from "./components/banner";
import Card from "./components/card";

import CardGroups from "./containers/cardgroups";



function App() {
  return (
   <div>
        <Home/>
        <Banner/>
       <CardGroups/>
   </div>
  );
}

export default App;
