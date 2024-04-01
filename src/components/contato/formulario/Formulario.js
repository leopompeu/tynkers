'use client'

import ReactInputMask from 'react-input-mask';
import './Formulario.css'
import Image from 'next/image';
import { useState } from 'react';

function Contato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [Mensagem, setMensagem] = useState('');

    return(
        <div className="contato-background">
            <h2 className='title-contato'>ENTRE EM <span style={{color: '#00D96C'}}>CONTATO</span></h2>
            <div style={{display: 'flex', width: '80%', gap: '50px', marginTop: '5%', justifyContent: 'center'}}>
                <Image
                    src="/images/robo-tynkers3.webp"
                    width={300}
                    height={300}
                    priority={false}
                    alt='Robo da tynkers, a melhor escola da técnologia'
                />
                <div className='div-form-contato-home'>
                    <p className='text-form-contato-home'>Nossa equipe te responderá assim que possível! Agradecemos o contato!</p>
                    <form className='form-contato-home' id='form-data' onSubmit={(e) => {Submit(e)}}>
                        <label className='label-contato-home'>Nome</label>
                        <input className='input-contato-home' value={nome} onChange={(e) => {setNome(e.target.value)}} style={{marginBottom: '2.5%'}}/>
                        <label className='label-contato-home'>Email</label>
                        <input className='input-contato-home' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}} style={{marginBottom: '2.5%'}}/>
                        <label className='label-contato-home'>Whatsapp</label>
                        <ReactInputMask className='input-contato-home' mask={'(99) 99999-9999'} value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value)}} style={{marginBottom: '2.5%'}}/>
                        <label className='label-contato-home'>Mesagem (opcional)</label>
                        <textarea className='textarea-contato-home'/>
                        <button className='button-type-1' type='submit' name='Botão de envio de formulário' style={{marginTop: '5%', width: '60%'}}>ENVIAR!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contato;
//# sourceMappingURL=swiper-bundle.js.map
