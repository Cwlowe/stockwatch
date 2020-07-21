import React from 'react'

const searchbar = (prop) =>{
    
    return(
        <div className="search-cont">
            <input onKeyDown={prop.setLStock} type="text" placeholder="Search Stock" className="searchBar"/>
        </div>
        
    );
}

export default searchbar;