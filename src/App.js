import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from "./components/searchbar.jsx";
import Stockcard from "./components/stockcard.jsx";

function App() {
  const [body, setBody] = useState({name:"AMD", c:0, h:0, l:0, o:0, pc:0, t:0});
  const [count, setCount] = useState(0);

  useEffect(() => {
    // let interval = null;
    let name = "AMD";
    //https://finnhub.io/dashboard bs8der7rh5r8i6g9hd60
    let token = "";

    //Handles storing the body
    function handleSetBody(body, name){
      setBody({...body, name:name});
      setCount(count+1);
      console.log(count)
    }
    
    //Send requests to finnhub.io website
    let interval = setInterval(() => {
      const request = require('request');
      request(`https://finnhub.io/api/v1/quote?symbol=${name}&token=${token}`, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
        handleSetBody(body, name) 
      });
    }, 1500);
    return ()=> clearInterval(interval)

  });
  //jsx code
  return (
    <div className="App">
      <Searchbar/>
      <div className="cardHolder">
        <Stockcard body={body}/>
      </div>
    </div>
  );
}

export default App;
