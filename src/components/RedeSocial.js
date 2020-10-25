import React from 'react';
import {Link} from 'react-router-dom';

import Linkedin from '../assets/Linkedin.svg';
import Email from '../assets/Email.svg';
import Instagram from '../assets/Instagram.svg';

const LinkedinUrl = 'https://www.linkedin.com/in/geanlopes/';
const InstagramUrl = 'https://www.instagram.com/f.geanlopes/';
const EmailUrl = 'mailto:f.geanlopes@gmail.com';

function RedeSocial (){
    return(
        <>
            <Link className="icone" to={{pathname:LinkedinUrl}} target="_blank">
                <img src={Linkedin} />
            </Link>
            <Link className="icone" to={{ pathname:EmailUrl}} target="_blank">
                <img src={Email} />
            </Link>
            <Link className="icone" to={{ pathname:InstagramUrl}} target="_blank">
                <img src={Instagram} />
            </Link>
        </>
    )
}

export default RedeSocial;