import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from "./components/searchbar.jsx";
import Stockcard from "./components/stockcard.jsx";

function App() {
  const [body, setBody] = useState({name:"AMD", c:0, h:0, l:0, o:0, pc:0, t:0});
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Calling:")
    console.log("in the getQuote")
    // let interval = null;
    let name = "AMD";
    //
    let token = "";

    function handleSetBody(body, name){
      setBody({...body, name:name});
      setCount(count+1);
      console.log(count)
    }
    
    let interval = setInterval(() => {
      const request = require('request');
      request(`https://finnhub.io/api/v1/quote?symbol=${name}&token=${token}`, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
        handleSetBody(body, name) 
      // console.log(`Sent: ${count}`);
      });
    }, 10000);
    return ()=> clearInterval(interval)

  });

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
