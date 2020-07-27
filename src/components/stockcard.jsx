import React, { useState, useEffect } from "react"

const Stockcard = (prop) =>{
    const [lowValue, setLValue] = useState(null);
    const [highvalue, setHValue] = useState(null);
    const [count, setCount] = useState(0);
    const [sbody, setBody] = useState({name:prop.stockname, c:0, h:0, l:0, o:0, pc:0, t:0});
    const [warn, setWarn] = useState(false);
    //Handles storing the body
    function handleSetBody(body, name){
        console.log(Number(lowValue),body.c, Number(highvalue))
        console.log(Number(lowValue)>= body.c)
        console.log(body.c <= Number(highvalue))
        if( body.c >= Number(lowValue) && body.c <= Number(highvalue)){
            setWarn(true)
        }else{
            setWarn(false)
        }
        setBody({...body, name:name});
    }

    const handleLSetPrice=(e) =>{
        if(e.which === 13){
            console.log("setL")
            setLValue(e.target.value)
        }

    }
    const handleHSetPrice=(e) =>{
        if(e.which === 13){
            console.log("setH")
            setHValue(e.target.value)
        }

    }
    useEffect(() => {
        // let interval = null;
        let name = prop.stockname;
        //https://finnhub.io/dashboard 
        let token = "bsf8oqnrh5rf14r5ivog";
        
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
        }, 1000);
        return ()=> clearInterval(interval)
    
      });

    return(
        <div className="column">
            <div className={warn ? "sotckCard-Cont-pa" : "stockCard-cont "}>
                <h2>{sbody.name}</h2>
                <input className="setPriceStyle" onKeyDown={handleLSetPrice} type="text" placeholder="Low"/>
                -
                <input className="setPriceStyle" onKeyDown={handleHSetPrice} type="text" placeholder="High"/>
                {/* <p>Set value: {value ? value:"No set value"}</p> */}
                <p>{sbody.c}</p>
            </div>
        </div>
    )
}

export default Stockcard;