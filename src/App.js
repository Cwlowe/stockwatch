import React, { useState } from 'react';
import './App.css';
import Searchbar from "./components/searchbar.jsx";
import Stockcard from "./components/stockcard.jsx";

function App() {
  // List of stocks for search
  const [Lstock, setLStock] = useState({});
  
  const handleSearchList = (e) =>{
    let stockname = e.target.value;
    let token = "bsbo02nrh5r8nm9ejgug";
    if(e.which === 13){
      const request = require('request');
      request(`https://finnhub.io/api/v1/quote?symbol=${stockname}&token=${token}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        if(res.body.error === "Symbol not supported."){
            alert("Stock Not Supported");
        }else{
          let stocklist = {
            ...Lstock,
            [stockname]:stockname,
          };
          setLStock(stocklist);
        }
      });
    }
  }

  const handleRemove = (stockname)=>{
    const stocklist = {...Lstock}
    delete stocklist[stockname]
    setLStock(stocklist)
  }

  //jsx code
  return (
    <div className="App">
      <Searchbar setLStock={handleSearchList}/>
      <div className="cardHolder">
        {Object.values(Lstock).map((x, key) =>(
          <Stockcard key={key} stockname={x} remove={handleRemove}/>
        ))}
      </div>
    </div>
  );
}

export default App;
