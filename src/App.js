import React, { useState } from 'react';
import './App.css';
import Searchbar from "./components/searchbar.jsx";
import Stockcard from "./components/stockcard.jsx";

function App() {
  // List of stocks for search
  const [Lstock, setLStock] = useState({})

  const handleSearchList = (e) =>{
    let stockname = e.target.value
    if(e.which === 13){
      let stocklist = {
        ...Lstock,
        [stockname]:stockname,
      }
      setLStock(stocklist)
    }
  }
  //jsx code
  return (
    <div className="App">
      <Searchbar setLStock={handleSearchList}/>
      <div className="cardHolder">
        {Object.values(Lstock).map((x, key) =>(
          <Stockcard key={key} stockname={x}/>
        ))}
      </div>
    </div>
  );
}

export default App;
