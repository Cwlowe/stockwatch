import React from 'react';
import './App.css';
import Searchbar from "./components/searchbar.jsx";
import Stockcard from "./components/stockcard.jsx";
function App() {
  return (
    <div className="App">
      <Searchbar/>
      <div className="cardHolder">
        <Stockcard/>
        <Stockcard/>
        <Stockcard/>
        <Stockcard/>
        <Stockcard/>
        <Stockcard/>
        
      </div>
    </div>
  );
}

export default App;
