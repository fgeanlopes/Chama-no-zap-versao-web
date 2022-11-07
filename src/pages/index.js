import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import Header from '@Components/header'

export default function Home() { 
  const [valuesDigit, setValuesDigit] = useState({viewDigit:'', sendDigit:''})
  const [enableBtn, setEnableBtn] = useState(false)
  const [messageBtn, setMessageBtn] = useState('Digite o número acima')

  // const handleReplaceViewDigit = (value) => (value.replace(/\D/g,"").replace(/^(\d{2})(\d)/g,"($1) $2").replace(/(\d)(\d{4})$/,"$1-$2"))
  // const handleSetMessage  = (viewDigit) => viewDigit.length > 0 ? setMessageBtn('Digite número completo') : setMessageBtn('Digite o número acima') 
  // const handleReplaceSendDigit = (viewDigit) => (viewDigit.replace(/[^0-9]/g,''))

  useEffect(()=>{
    const viewDigit = valuesDigit.viewDigit
    if(viewDigit.length === 15){
      const sendDigit = handleReplaceSendDigit(viewDigit)
      handleEnableBtn()
      setValuesDigit({...valuesDigit, sendDigit})
    }else {
      setEnableBtn(false)}
  },[valuesDigit.viewDigit])
  
  const handleReplaceSendDigit = useCallback((viewDigit) => {
    return viewDigit.replace(/[^0-9]/g,'')
  },[])

  const handleEnableBtn  = useCallback((e) => {
    setMessageBtn("Chamar número")
    setEnableBtn(true)
  },[messageBtn, enableBtn])

  const handleInputChange = useCallback((e)=>{
    const viewDigit = handleReplaceViewDigit(e.target.value)
    setValuesDigit({...valuesDigit, viewDigit})
  },[valuesDigit.viewDigit])

  const handleReplaceViewDigit = useCallback((value) => {
    handleSetMessage(value)
    return value
  },[])

  const handleSetMessage = useCallback((value) => {
    if(value.length > 0){
      setMessageBtn('Digite número completo')
      return
    }
    setMessageBtn('Digite o número acima')
  },[valuesDigit.viewDigit])

  return (
    <>
      <Header/>
      <section className="home" id="home">
        <div className="content">
          <div className="logo">
            <Image src="/logo.png" alt="Chama no zap" width="331px" height="191px"/>
          </div>
          <div className="input_number">
            <input type="tel" value={valuesDigit?.viewDigit} maxLength="15" placeholder="Digite número aqui" onChange={(e)=>{handleInputChange(e)}}/>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${valuesDigit?.viewDigit.length == 15 ? 'check' : 'none'}`} viewBox="0 0 166 150.9"><path d="M0.3 96l62.4 54.1L165.6 0.3"/></svg>
          </div>
          {enableBtn ? 
            <a className="button_wp button btn_chamar bold" 
            target="_blank" href={`https://wa.me/55${valuesDigit?.sendDigit}`}>
              <p>{messageBtn}</p>
              <svg width="18" height="12" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1377 5.33853C14.4002 5.0734 14.3942 4.64943 14.1243 4.39157L9.72539 0.189606C9.45548 -0.0682511 9.02379 -0.0623632 8.76125 0.202757C8.4987 0.467873 8.5047 0.891829 8.77466 1.14968L11.9485 4.18149C12.353 4.56784 12.3619 5.21081 11.9684 5.60825L8.88179 8.7251C8.61925 8.99023 8.62525 9.41416 8.89516 9.67202C9.16511 9.92987 9.59675 9.92398 9.85929 9.65889L14.1377 5.33853ZM0.00934568 5.05802C0.0145731 5.4277 0.318397 5.7232 0.688077 5.71815L12.9885 5.55035C13.3584 5.5453 13.6542 5.24124 13.6489 4.87131C13.6437 4.50164 13.3399 4.20615 12.9702 4.21119L0.66981 4.37895C0.299868 4.384 0.00411458 4.68808 0.00934568 5.05802Z" fill="white"/>
              </svg>
            </a>
          : 
            <div className="button_wp button btn_chamar">
                <p>{messageBtn}</p>
            </div>
          }
        </div>
      </section>
      <section className="info">
        <div className="rede_social">
          <a href="https://www.linkedin.com/in/geanlopes/" target="_blank">
            <p>Linkedin</p>
          </a>         
          <a href="mailto:f.geanlopes@gmail.com" target="_blank">
            <p>Email</p>
          </a>
          <a href="https://github.com/fgeanlopes" target="_blank">
            <p>GitHub</p>
          </a>
        </div>
        <a className="version" target="_blank" href={`https://web.whatsapp.com/send/55${valuesDigit?.sendDigit}`}>V.4</a>
      </section>
    </>
  )
}