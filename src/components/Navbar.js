import React from 'react';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import LogoVerfical from '../assets/LogoVertical.svg';
import "./Navbar.scss";

function Navbar (){
    return(
        <div className="navbar">
            <img className="LogoVerfical" src={LogoVerfical} alt="" />
            <div className="itens">
                <AnchorLink href='#seccao2' className="global_description link">O que é</AnchorLink>
                <AnchorLink href='#seccao3' className="global_description link">Por que?</AnchorLink>
                <AnchorLink href='#seccao4' className="global_description link">Contato</AnchorLink>
            </div>
        </div>
    )
}

export default Navbar;