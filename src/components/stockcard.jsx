import React, { useState, useEffect } from "react"

const Stockcard = (prop) =>{
    const [value, setValue] = useState(null);
    const [count, setCount] = useState(0);
    const [sbody, setBody] = useState({name:prop.stockname, c:0, h:0, l:0, o:0, pc:0, t:0});

    //Handles storing the body
    function handleSetBody(body, name){
        setBody({...body, name:name});
    }

    const handleSetPrice=(e) =>{
        if(e.which === 13){
            setValue(e.target.value)
        }

    }
    useEffect(() => {
        // let interval = null;
        let name = prop.stockname;
        //https://finnhub.io/dashboard bsb20svrh5raiv9cegqg
        let token = "bsbo02nrh5r8nm9ejgug";
        
        //Send requests to finnhub.io website
        let interval = setInterval(() => {
          const request = require('request');
          request(`https://finnhub.io/api/v1/quote?symbol=${name}&token=${token}`, { json: true }, (err, res, body) => {
          if (err) { return console.log(err); }
          if(res.body.error === "Symbol not supported."){
              prop.remove(name)
          }else{
            // test - body
            // console.log(body)
            handleSetBody(body, name);
            setCount(count+1);
            // test - count
            // console.log(count) 
          }
          });
        }, 2000);
        return ()=> clearInterval(interval)
    
      });

    return(
        <div className="column">
            <div className="stockCard-cont">
                <h2>{sbody.name}</h2>
                <input className="setPriceStyle" onKeyDown={handleSetPrice} type="text" placeholder="Set Price"/>
                <p>Set value: {value ? value:"No set value"}</p>
                <p>{sbody.c}</p>
            </div>
        </div>
    )
}

export default Stockcard;