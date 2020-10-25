import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import logoSimbolo from '../../assets/logoSimbolo.svg';
import LogoBanner from '../../assets/LogoBanner.svg';

import RedeSocial from '../../components/RedeSocial';
import ImgCell from '../../assets/preview_cell.png';

import './Home.scss'

function Home (){
    return (
        <div className="home">
            <section className="box_1">
                <Navbar/>
                <div className="RedeSocialVertical">
                    <RedeSocial/>
                </div>
                <img className="LogoBanner" src={LogoBanner} alt="Logo Chama no Zap!"/>
            </section>
            <section className="box_2">
                <div className="ImgCell">
                    <img src={ImgCell} alt="Preview App, chama no zap!"/>
                </div>
                <div className="content_description">
                    <h3 className="global_title">O que é</h3>
                    <p className="global_description">
                        Chama no Zap! É um aplicativo que tem a missão de facilitar o inicio de 
                        novas conversa no WhatsApp. Com este aplicativo, você não precisa salvar 
                        o números da pessoa ou empresa para começar a conversa.
                    </p>
                </div>
            </section>
            <section className="box_3">
                <div className="logoSimbolo">
                    <img src={logoSimbolo} />
                </div>
                <div className="content_description">
                    <h3 className="global_title">Por quê</h3>
                    <p className="global_description">
                        Chama no Zap! Nasceu, da necessidade de se chamar varias pessoas que 
                        eu não tinha número salvo no WhatsApp, com ele você pode chamar 
                        quem quiser, sem precisar ter número salvo, Chama no Zap, nasceu 
                        em uma tarde de domingo, e foi desenvolvido por min Gean Lopes (para me conhecer, clique aqui)
                        O aplicativo é gratuito e está disponível na Play Store. Você pode baixar click aqui.
                    </p>
                </div>
            </section>
            <section className="box_4">
                <h3 className="global_title">Contato</h3>
                <div className="icones_contato">
                    <RedeSocial />
                </div>
            </section>
        </div>
    )
}

export default Home;