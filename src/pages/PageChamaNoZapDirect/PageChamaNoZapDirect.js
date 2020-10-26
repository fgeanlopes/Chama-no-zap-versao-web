import react, {useState} from 'react';
import { Link } from 'react-router-dom';

import RedeSocial from '../../components/RedeSocial';
import LogoVerfical from '../../assets/LogoVertical.svg';

import LogoBanner from '../../assets/LogoBanner.svg';

import './PageChamaNoZapDirect.scss';


function PageChamaNoZapDirect (){
    const [numeroTelefone, setNumeroTelefone] = useState('');

    function handleInputChange(event) {
        let telefoneInput = event.target.value;
        setNumeroTelefone(telefoneInput);
    }

    return (
        <div className="web">
            <div className="box_1">
                <img className="LogoVerfical" src={LogoVerfical} alt="" />
                <Link to="/" className="global_description link-home">Saiba Mais</Link>

                <img className="LogoBanner" src={LogoBanner} alt="Logo Chama no Zap!" />
                
                <div className="mensagem">
                    <input maxLength={11} type="text" className="global_description" id="telefone" placeholder="Digite o número para chamar" onChange={handleInputChange} />
                    <a className="btn_send" href={`https://api.whatsapp.com/send?phone=55${numeroTelefone}`} target="_blank">
                        <p className="btn_chamarzap global_description">CHAMAR</p>
                    </a>
                </div>

            </div>
            <div className="box_2">
                <RedeSocial/>
            </div>
        </div>
    )
}
export default PageChamaNoZapDirect;