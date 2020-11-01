import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import icon_top from "../assets/botao_subir.svg";

window.onscroll = () => {
    var btn_to_top = window.scrollY;
    var botao_subir = document.querySelector(".botao_subir");

    if (btn_to_top > 100) {
        botao_subir.classList.add("active");
    } 
    else {
        botao_subir.classList.remove("active");
    }
};

function BotaoSubir(){
    return (
        <AnchorLink href="#seccao1" className="botao_subir">
            <img src={icon_top}></img>
        </AnchorLink>
    );
}

export default BotaoSubir;
