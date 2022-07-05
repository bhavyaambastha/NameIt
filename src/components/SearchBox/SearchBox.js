import React from 'react';
import './SearchBox.css';

function SearchBox({onInputChange}) {
    return <div className="search-container">
        <input className="search-bar"
            placeholder="Type keyword" onChange={(Event) => onInputChange(Event.target.value)}
        ></input>
    </div>
};

export default SearchBox;