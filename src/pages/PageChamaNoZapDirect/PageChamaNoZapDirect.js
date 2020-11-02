import react, {useState} from 'react';
import { Link } from 'react-router-dom';

import RedeSocial from '../../components/IconeRedeSocial/RedeSocial';
import BotaoSubir from '../../components/BotaoSubir';
import LogoVerfical from '../../assets/LogoVertical.svg';
import LogoBanner from '../../assets/LogoBanner.svg';

import './PageChamaNoZapDirect.scss';


function PageChamaNoZapDirect (){
    const [numeroTelefone, setNumeroTelefone] = useState("");
    const [habilitaBtn, setHabilitaBtn] = useState(0);
    const [mensagemBtn, setMensagemBtn] = useState('Digite o número acima');

    function handleInputChange(event) {
        let telefoneInput = event.target.value;
        telefoneInput = telefoneInput.replace(/[^0-9]/g, "")

        // Adicionar a partir da posicao zero este simbolo "("
        telefoneInput = telefoneInput.replace(/(.{0})(\d)/, "$1($2")

        // Adicionar a partir da posicao três este simbolo ")"
        telefoneInput = telefoneInput.replace(/(.{3})(\d)/, "$1)$2")

        // Adiciona o espaço
        if (telefoneInput.length >=6){
            // Adicionar a partir da posicao quatro um espaço entre os números
            telefoneInput = telefoneInput.replace(/(.{4})(\d)/, "$1 $2 ")
        } 
        if(telefoneInput.length >= 10) {
            // Adicionar a partir da posicao dez um espaço entre os números
            telefoneInput = telefoneInput.replace(/(.{10})(\d)/, "$1$2 ")
        }
       
        if (telefoneInput.length >= 17){
            return false;
        }
        else if (telefoneInput.length >= 15){
            setNumeroTelefone(telefoneInput);
            setHabilitaBtn(1);
            setMensagemBtn('Chamar');
        }
        else{
            setNumeroTelefone(telefoneInput);
            setHabilitaBtn(0);
            if (telefoneInput.length >= 1) {
                setMensagemBtn('Digite número completo');
            }else{
                setMensagemBtn('Digite o número acima');
            }
            if (telefoneInput.length >= 15) {
                setHabilitaBtn(1);
                setMensagemBtn('Chamar');
            }
        }
    }

    function clearInput(){
        setTimeout(() => {
            setNumeroTelefone('');
            console.log('limpou');
        }, 3000);
    }
    return (
        <div className="web">
            <div className="d-none">
                <BotaoSubir />
            </div>
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
                        <a onClick={clearInput} target="_blank" className="btn_send btn_chamarzap global_description" 
                            href={`https://api.whatsapp.com/send?phone=55${numeroTelefone}`} >{mensagemBtn}</a> : 
                        <div className="btn_send btn_chamarzap global_description">
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