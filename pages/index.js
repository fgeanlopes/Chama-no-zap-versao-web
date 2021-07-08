import {useState, useCallback, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';

//TODO GOOGLE ANALYTICS
import ReactGA from 'react-ga';
ReactGA.initialize('UA-172441185-1');

//TODO FIREBASE
import firebase from "firebase/app"
import "firebase/firestore"



export default function Home(props) {
    
  const [values, setValues] = useState('');
  const [callWhatsapp, setCallWhatsapp] = useState('');
  const [randomColor, setRandoColor] = useState("");
  const [habilitaBtn, setHabilitaBtn] = useState(false);
  const [mensagemBtn, setMensagemBtn] = useState('Digite o número acima');

  //TODO GOOGLE ANALYTICS
  useEffect(()=>{
      ReactGA.pageview(window.location.pathname + window.location.search);
  },[])
  
 //TODO FIREBASE 2
  useEffect( async ()=>{
    let date = new Date();
    let dia = date.getDate();
    let acesso = {dia, hora:`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}

    let firebaseConfig = {
      // apiKey:process.env.APIKEY,
      // authDomain:process.env.AUTHDOMAIN,
      // projectId:process.env.PROJECTID,
      // storageBucket:process.env.STORAGEBUCKET,
      // messagingSenderId:process.env.MESSAGINGSENDERID,
      // appId:process.env.APPID,
      // measurementId:process.env.MEASUREMENTID
      
      // apiKey:process.env.NEXT_PUBLIC_APIKEY,
      // authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
      // projectId:process.env.NEXT_PUBLIC_PROJECTID,
      // storageBucket:process.env.NEXT_PUBLIC_STORAGEBUCKET,
      // messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
      // appId:process.env.NEXT_PUBLIC_APPID,
      // measurementId:process.env.NEXT_PUBLIC_MEASUREMENTID

      apiKey: "AIzaSyCNi1WmPNkv2-amZP7ZoPCRKaCEqUIY03k",
      authDomain: "chama-no-zap-fb014.firebaseapp.com",
      projectId: "chama-no-zap-fb014",
      storageBucket: "chama-no-zap-fb014.appspot.com",
      messagingSenderId: "799557647828",
      appId: "1:799557647828:web:e696ffb0107371ec58ea41",
      measurementId: "G-LCFRQ77RWS"
    };
    
    let app = "";
    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
    }

    // //TODO SEND FIREBASE
    const db = firebase.firestore(app);
    const res = await db.collection('acess').add(acesso);
  },[])

  // GENERATION COLORS
  useEffect(()=>{
    setRandoColor(Math.floor(Math.random()*16777215).toString(16.6));
    window.onscroll = () => {
      let to = window.scrollY;
      let up = document.querySelector(".toUp");
      // console.log(up);
  
      if (to > 100) up.classList.add("active");
      else up.classList.remove("active");
    };    
  },[]);

  // SCROLL ANIMATE
  const handleScroll = useCallback((element)=>{
    document.getElementById(element).scrollIntoView({ 
      behavior: 'smooth' 
    });
  },[]);

  // INPUT DATA ENTRY
  const handleInputChange = useCallback((e)=>{
    let dig = e.target.value;
    
    dig = dig.replace(/\D/g,"")
    dig = dig.replace(/^(\d{2})(\d)/g,"($1) $2")
    dig = dig.replace(/(\d)(\d{4})$/,"$1-$2")

    dig.length === 0 && setMensagemBtn('Digite o número acima')
    dig.length > 0 && setMensagemBtn('Digite número completo')
    
    setValues(dig);
  },[values]);
  
  //ANIMATE INPUT
  useEffect(()=>{
    let checkValidate = document.getElementById("check_number");
    let animate = document.querySelector(".button_wp");

    if(values.length === 15){
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

  },[values]);

  // REPLACE CALLWHATSAPP
  useEffect(()=>{
    setCallWhatsapp(values.replace("-","").replace(" ", "").replace("(", "").replace(")", ""));
  },[values]);

  return (
    <>
      <Head>
          <title>Chama no zap | Seja mais produtivo</title>
          <meta name="description" content="Chame seus contatos sem salvar no WhatsApp." />
          <meta name="author" content="Gean Lopes | https://www.linkedin.com/in/geanlopes/"/>
          <meta name="keywords" content="Gean Lopes,Chama no zap,Seja mais produtivo"/>
          <meta property="og:title" content="Chama no zap" />
          <meta property="og:image" content="/chamanozap_web.png" />
          <meta name="robots" content="follow" />

          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
      </Head>
      <section className="home" id="home" style={{ backgroundImage: `linear-gradient(to bottom, ${`#`+ randomColor}, black)`}}>
          <div className="content">
            <div className="logo">
              <Image src="/logo.png" alt="Chama no zap" width="331px" height="191px"/>
            </div>
            <div className="link_saiba_mais button" onClick={()=>{handleScroll('project')}}>Conheça o projeto</div>
            <div className="input_number">
              <input type="tel" value={values} maxLength="15" placeholder="Digite número aqui" onChange={(e)=>{handleInputChange(e)}}/>
              <svg xmlns="http://www.w3.org/2000/svg" id="check_number" className="none" width="20" height="18" viewBox="0 0 166 150.9"><path d="M0.3 96l62.4 54.1L165.6 0.3"/></svg>
            </div>
            {habilitaBtn ? 
              <a className="button_wp button btn_chamar bold" 
              target="_blank" href={`https://wa.me/55${callWhatsapp}`}>
                <p>{mensagemBtn}</p>
                <svg width="18" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1377 5.33853C14.4002 5.0734 14.3942 4.64943 14.1243 4.39157L9.72539 0.189606C9.45548 -0.0682511 9.02379 -0.0623632 8.76125 0.202757C8.4987 0.467873 8.5047 0.891829 8.77466 1.14968L11.9485 4.18149C12.353 4.56784 12.3619 5.21081 11.9684 5.60825L8.88179 8.7251C8.61925 8.99023 8.62525 9.41416 8.89516 9.67202C9.16511 9.92987 9.59675 9.92398 9.85929 9.65889L14.1377 5.33853ZM0.00934568 5.05802C0.0145731 5.4277 0.318397 5.7232 0.688077 5.71815L12.9885 5.55035C13.3584 5.5453 13.6542 5.24124 13.6489 4.87131C13.6437 4.50164 13.3399 4.20615 12.9702 4.21119L0.66981 4.37895C0.299868 4.384 0.00411458 4.68808 0.00934568 5.05802Z" fill="white"/>
                </svg>
              </a>
            : 
              <div className="button_wp button btn_chamar">
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
          <a href="https://www.linkedin.com/in/geanlopes/" target="_blank">
            <Image src="/linkedin.png" alt="Linkedin Gean Lopes" width="45px" height="45px"/>
          </a>
          <a href="mailto:f.geanlopes@gmail.com" target="_blank">
            <Image src="/email.png" alt="E-mail Gean Lopes" width="45px" height="45px"/>
          </a>
          <a href="https://github.com/fgeanlopes" target="_blank">
            <Image src="/github.png" alt="Github Gean Lopes" width="45px" height="45px"/>
          </a>
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
      <div style={{ backgroundColor: `${`#`+ randomColor}`}} className="toUp" onClick={()=>{handleScroll('home')}}>
        <Image src="/arrow.svg" width="30px" height="17px" />
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const {
    APIKEY,AUTHDOMAIN,PROJECTID,
    STORAGEBUCKET,MESSAGINGSENDERID,APPID,
    MEASUREMENTID
  } = process.env;
  
  return {
    props:{
      // apiKey:APIKEY,
      // authDomain:AUTHDOMAIN,
      // projectId:PROJECTID,
      // storageBucket:STORAGEBUCKET,
      // messagingSenderId:MESSAGINGSENDERID,
      // appId:APPID,
      // measurementId:MEASUREMENTID
    }
  }
}