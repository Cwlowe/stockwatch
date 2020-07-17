import React from "react"

const stockcard = (prop) =>{
    // console.log(prop.body)
    return(
        <div className="column">
            <div className="stockCard-cont">
                <h2>{prop.body.name}</h2>
                <p>{prop.body.c}</p>
            </div>
        </div>
    )
}

export default stockcard;