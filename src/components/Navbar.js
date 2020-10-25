import React from 'react';
import {Link} from 'react-router-dom';

import LogoVerfical from '../assets/LogoVertical.svg';
import "./Navbar.scss";

function Navbar (){
    return(
        <div className="navbar">
            <img className="LogoVerfical" src={LogoVerfical} alt="" />
            <div className="itens">
                <Link to="" className="global_description link">O que é</Link>
                <Link to="" className="global_description link">Porque?</Link>
                <Link to="" className="global_description link">Contato</Link>
            </div>
        </div>
    )
}

export default Navbar;