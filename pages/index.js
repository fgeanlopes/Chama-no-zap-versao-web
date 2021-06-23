import react, {useState, useCallback, useEffect} from 'react';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  
  const [numero, setNumero] = useState('');
  const [randomColor, setRandoColor] = useState(Math.floor(Math.random()*16777215).toString(16.6));
  const [habilitaBtn, setHabilitaBtn] = useState(false);
  const [mensagemBtn, setMensagemBtn] = useState('Digite o número acima');

  const callMessage = useCallback( async ()=>{
    let number = numero.replace("-","").replace(" ", "").replace("(", "").replace(")", "");
    let resultCheck = await axios.post("https://check-whatsapp-9mzzw1z2y-fgeanlopes.vercel.app", {number});

    console.log('data', resultCheck);

  },[numero])

  const handleScroll = useCallback((element)=>{
    document.getElementById(element).scrollIntoView({ 
      behavior: 'smooth' 
    });
  },[]);

  const handleInputChange = useCallback((e)=>{
    let dig = e.target.value;
    
    dig = dig.replace(/\D/g,"")
    dig = dig.replace(/^(\d{2})(\d)/g,"($1) $2")
    dig = dig.replace(/(\d)(\d{4})$/,"$1-$2")

    dig.length === 0 && setMensagemBtn('Digite o número acima')
    dig.length > 0 && setMensagemBtn('Digite número completo')
    setNumero(dig)
  },[numero]);

  useEffect(()=>{
    let checkValidate = document.getElementById("check_number");
    let animate = document.querySelector(".button_wp");

    if(numero.length === 15){
      checkValidate.classList.add("check");
      checkValidate.classList.remove("none");
      setMensagemBtn("Chamar número")
      setHabilitaBtn(true);
    }else{
      checkValidate.classList.remove("check");
      checkValidate.classList.add("none");
      setHabilitaBtn(false);
    }
    
    animate.classList.add("animate");
    setTimeout(() => {
      animate.classList.remove("animate")
    }, 100);
        
  },[numero])

  return (
    <>
      <section className="home" id="home" style={{ backgroundImage: `linear-gradient(to bottom, ${`#`+ randomColor}, black)`}}>
          <div className="content">
            <div className="logo">
              <Image src="/logo.png" alt="Ícone do projeto chama no zap" width="331px" height="191px"/>
            </div>

            {/* COLOCAR TECLADO DE NUMERO DO CELULAR */}
            <div className="link_saiba_mais button" onClick={()=>{handleScroll('project')}}>Conheça o projeto</div>

            <div className="input_number">
              <input 
                type="tel"
                value={numero}
                maxLength="15"
                placeholder="Digite número aqui"
                onChange={(e)=>{handleInputChange(e)}}
              />
              <svg xmlns="http://www.w3.org/2000/svg" id="check_number" className="none" width="20" height="18" viewBox="0 0 166 150.9"><path d="M0.3 96l62.4 54.1L165.6 0.3"/></svg>
            </div>

            <a className="button_wp button btn_chamar bold" onClick={()=>{callMessage()}}>TESTE</a>

            {/* {habilitaBtn ? 
                <a className="button_wp button btn_chamar bold" onClick={callMessage} 
                // target="_blank" href={`https://api.whatsapp.com/send?phone=55${numero}`}
                >
                    <p>{mensagemBtn}</p>
                    <svg width="18" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.1377 5.33853C14.4002 5.0734 14.3942 4.64943 14.1243 4.39157L9.72539 0.189606C9.45548 -0.0682511 9.02379 -0.0623632 8.76125 0.202757C8.4987 0.467873 8.5047 0.891829 8.77466 1.14968L11.9485 4.18149C12.353 4.56784 12.3619 5.21081 11.9684 5.60825L8.88179 8.7251C8.61925 8.99023 8.62525 9.41416 8.89516 9.67202C9.16511 9.92987 9.59675 9.92398 9.85929 9.65889L14.1377 5.33853ZM0.00934568 5.05802C0.0145731 5.4277 0.318397 5.7232 0.688077 5.71815L12.9885 5.55035C13.3584 5.5453 13.6542 5.24124 13.6489 4.87131C13.6437 4.50164 13.3399 4.20615 12.9702 4.21119L0.66981 4.37895C0.299868 4.384 0.00411458 4.68808 0.00934568 5.05802Z" fill="white"/>
                    </svg>
                </a>
                : 
                <div className="button_wp button btn_chamar">
                    <p>{mensagemBtn}</p>
                </div>
            } */}
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

// export const getStaticProps = () => {

//   const puppeteer = require('puppeteer');

//   const checkNumber = async () =>{
//     const browser = await puppeteer.launch({headless: true});
//     const page = await browser.newPage();

//     await page.goto('https://watools.io/check-numbers');
//     await page.select('[ng-model="countryDialCode"]','string:+55');
//     await page.type('[ng-model="phone"]', '19984569788');
//     await page.click('[ng-click="checkNumber()"]');

//     results = {};

//     const getData = async() => {
//       return await page.evaluate(async () => {
//           return await new Promise(resolve => {
//             setTimeout(() => {
//                   resolve([
//                     {validacao:document.querySelector('.number-exists').textContent},
//                     {erro:document.querySelector('[ng-show="error"]').textContent}
//                   ]);
//             }, 3000)
//         })
//       })
//     }  
    
//     results = await getData();
//     console.log('0',results[0])
//     console.log('1',results[1])

//     await browser.close();
//     // return results;
//   }

//   return { props: {"results":} }
// }
