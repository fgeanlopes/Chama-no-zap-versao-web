import react, {useState, useCallback} from 'react';
import Image from 'next/image';

export default function Home() {
  
  const [numero, setNumero] = useState("");
  const [randomColor, setRandoColor] = useState(Math.floor(Math.random()*16777215).toString(16.6));
  const [habilitaBtn, setHabilitaBtn] = useState(false);
  const [mensagemBtn, setMensagemBtn] = useState('Digite o número acima');

  const clearInput = useCallback(()=>{
    setTimeout(setNumero(''), 1000);
  },[]);

  const topPage = useCallback(()=>{
    // setTimeout(setNumero(''), 1000);
  },[]);
  
//USAR CALLBACK
//   window.onscroll = () => {
//     var btn_to_top = window.scrollY;
//     var botao_subir = document.querySelector(".botao_subir");

//     if (btn_to_top > 100) {
//         botao_subir.classList.add("active");
//     } 
//     else {
//         botao_subir.classList.remove("active");
//     }
// };

  return (
    <>
      <section className="home" id="home" style={{ backgroundImage: `linear-gradient(to bottom, ${`#`+ randomColor}, black)`}}>
          <div className="content">
            <div className="logo">
              <Image src="/logo.png" alt="Ícone do projeto chama no zap" width="331px" height="191px"/>
            </div>

            {/* COLOCAR TECLADO DE NUMERO DO CELULAR */}
            <div className="link_saiba_mais button" onClick={handleScroll('project')}>Conheça o projeto</div>

            <input 
              type="text" 
              value={numero} 
              placeholder="Digite número aqui" 
              // onChange={handleInputChange}
              onChange=""
            />

            {habilitaBtn ? 
                <a onClick={clearInput} target="_blank" className="button btn_chamar" 
                    href={`https://api.whatsapp.com/send?phone=55${numero}`}/>
                : 
                <div className="button btn_chamar">
                    <p>{mensagemBtn}</p>
                </div>
            }
          </div>
      </section>
      <section className="project" id="project">
        <h2>O projeto</h2>
        <p>Nossa missão é facilitar uso do WhatsApp para você não precise salvar o número 
        de telefone para depois iniciar a conversa com o contato desejado.</p>
      </section>
      <section className="contact">
        <h2>Saiba Mais</h2>
        <div className="rede_social">
          <Image src="/linkedin.png" alt="Ícone do Linkedin do Gean Lopes" width="45px" height="45px"/>
          <Image src="/email.png" alt="Ícone do E-mail do Gean Lopes" width="45px" height="45px"/>
          <Image src="/github.png" alt="Ícone do Github do Gean Lopes" width="45px" height="45px"/>
        </div>
        <p className="version">V.3</p>
        <div className="effect_footer" style={{ backgroundImage: `linear-gradient(to top, ${`#`+ randomColor}, black)`}}></div>
      </section>
      <a href="https://play.google.com/store/apps/details?id=com.unidesenvlvimento.chamanozap&hl=pt_BR" target="_blank">
        <div className="downloadApp">
            <div className="header">
              Baixe o App
            </div>
            <div className="message_click">
                <p>Click aqui</p>
            </div>
        </div>
      </a>

      {/* <div className="voltarHome" onClick={handleScroll('home')}>
        Subir
      </div> */}
      {/* <BotaoSubir/> */}
    </>
  )
}
