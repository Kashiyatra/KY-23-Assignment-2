import React from 'react';
import "./App.css";
import ParticleBackground from "./ParticleBackground";

import './App.css';

import data from './data/data.json'

import Count from './components/Count';

function App() {
  return (
    <div>
      <ParticleBackground />
      <CenterTitle />
      <Background/>
    </div>
  );
}

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">About Us
        <br/>
         <i>(Scroll Down)</i></h1>
         
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className=" Background">  
    {data.counts.map(count => <Count key={count.id} data={count}/>)}   
  </div>
  );
}

export default App;
