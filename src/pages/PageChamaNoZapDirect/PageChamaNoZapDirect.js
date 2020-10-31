import react, {useState} from 'react';
import { Link } from 'react-router-dom';

import RedeSocial from '../../components/RedeSocial';
import LogoVerfical from '../../assets/LogoVertical.svg';

import LogoBanner from '../../assets/LogoBanner.svg';

import './PageChamaNoZapDirect.scss';


function PageChamaNoZapDirect (){
    const [numeroTelefone, setNumeroTelefone] = useState("");
    
    const [habilitaBtn, setHabilitaBtn] = useState(0);

    const [mensagemBtn, setMensagemBtn] = useState('Digite o número acima');

    function handleInputChange(event) {
        let telefoneInput = event.target.value;

        if (telefoneInput.length >= 12){
            return false;
        }
        else if (telefoneInput.length >= 10){
            setNumeroTelefone(telefoneInput);
            setHabilitaBtn(1);
            setMensagemBtn('Chamar');
            // console.log('COMPLETO SIM');
        }
        else{
            setNumeroTelefone(telefoneInput);
            setHabilitaBtn(0);
            if (telefoneInput.length >= 1) {
                setMensagemBtn('Digite número completo');
            }else{
                setMensagemBtn('Digite o número acima');
            }
            // console.log('N COMPLETO');
            if (telefoneInput.length >= 10) {
                setHabilitaBtn(1);
                setMensagemBtn('Chamar');
                // console.log('COMPLETO SIM');
            }
        }
    }

    return (
        <div className="web">
            <div className="box_1">
                <img className="LogoVerfical" src={LogoVerfical} alt="" />
                <Link to="/" className="global_description link-home">Saiba Mais</Link>
                <img className="LogoBanner" src={LogoBanner} alt="Logo Chama no Zap!" />
                <div className="mensagem">
                    <input 
                        type="text" 
                        value={numeroTelefone} 
                        className="global_description" 
                        placeholder="Digite número aqui" 
                        onChange={handleInputChange} 
                    />
                    
                    {habilitaBtn === 1 ? 
                        <a className="btn_send btn_chamarzap global_description" 
                            href={`https://api.whatsapp.com/send?phone=55${numeroTelefone}`} 
                            target="_blank">{mensagemBtn}
                        </a> : 
                        <div className="btn_send btn_chamarzap global_description" >
                            <p>{mensagemBtn}</p>
                        </div>
                    }

                </div>
            </div>
            <div className="box_2">
                <RedeSocial/>
            </div>
        </div>
    )
}
export default PageChamaNoZapDirect;