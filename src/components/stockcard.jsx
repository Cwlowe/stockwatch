import React, { useState } from "react"

const Stockcard = (prop) =>{
    // console.log(prop.body)
    const [value, setValue] = useState(null);

    const handleSetPrice=(e) =>{
        if(e.which === 13){
            setValue(e.target.value)
        }

    }

    return(
        <div className="column">
            <div className="stockCard-cont">
                <h2>{prop.body.name}</h2>
                <input className="setPriceStyle" onKeyDown={handleSetPrice} type="text" placeholder="Set Price"/>
                <p>Set value: {value ? value:"No set value"}</p>
                <p>{prop.body.c}</p>
                
            </div>
        </div>
    )
}

export default Stockcard;