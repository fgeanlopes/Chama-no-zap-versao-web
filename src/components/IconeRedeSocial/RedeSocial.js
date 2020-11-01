import React from 'react';
import {Link} from 'react-router-dom';

import Linkedin from './Linkedin';
import Email from './Email';
import Instagram from './Instagram';

const LinkedinUrl = 'https://www.linkedin.com/in/geanlopes/';
const InstagramUrl = 'https://www.instagram.com/fgeanlopes/';
const EmailUrl = 'mailto:f.geanlopes@gmail.com';

function RedeSocial (){
    return(
        <div className="rede_social_svg">
            <Link className="icone" to={{pathname:LinkedinUrl}} target="_blank">
                <Linkedin/>
            </Link>
            <Link className="icone" to={{ pathname:EmailUrl}} target="_blank">
                <Email/>
            </Link>
            <Link className="icone" to={{ pathname:InstagramUrl}} target="_blank">
                <Instagram/>
            </Link>
        </div>
    )
}

export default RedeSocial;