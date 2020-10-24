import React from 'react';
import {Link} from 'react-router-dom';

function Navbar (){
    return(
        <div className="navbar">
            <Link to="" className="link">O que é</Link>
            <Link to="" className="link">Porque?</Link>
            <Link to="" className="link">Contato</Link>
        </div>
    )
}

export default Navbar;