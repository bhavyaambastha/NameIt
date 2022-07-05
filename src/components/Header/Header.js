import React from 'react';
import './Header.css';

function Header({headTitle, headerExpanded}) {
    return (<div className="header">
        <img className={`head-image 
        ${headerExpanded ? 'head-image-extended' : 'head-image-contracted'}`}
            src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt='header_img'/>
        
        <h1 className={`head-text
         ${headerExpanded ? 'head-text-extended' : 'head-text-contracted' }`}>{headTitle}</h1>
     
    </div>
    );
};

export default Header;

