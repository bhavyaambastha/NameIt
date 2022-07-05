import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

function NameCard({suggestedName}) {
   
    return <div className="name-card">
    <a target="_blank"
    rel="noreferrer"
        className="card-link"
        href={`${nameCheapUrl}${suggestedName}`}>
        
            {suggestedName}
            </a>
        </div>
    
    

};

export default NameCard;