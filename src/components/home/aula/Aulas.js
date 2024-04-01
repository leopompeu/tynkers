'use client'

import { useRouter } from 'next/navigation';
import './Aulas.css'
import Image from 'next/image';

function Aula() {
    const router = useRouter

    return(
        <div className="aula-background">
            <h2 className='title-aula'>AGENDE UMA AULA EXPERIMENTAL <span style={{color: '#00D96C'}}>GRÁTIS</span>!</h2>
            <div className='div-aula'>
                <div className='div-text-aula'>
                    <p className='text-aula'>
                        Sem desperdício!<br/>
                        Agende uma aula experimental <b>totalmente gratuita</b> e tenha certeza 
                        que seu filho(a) <b>gostou da Tynkers</b>, antes da matrícula!
                        <br/><br/>
                        Nessa aula, introduzimos o nosso <b>módulo inicial</b>, com noções básicas 
                        de lógica de programação e muita <b>diversão!</b>
                    </p>
                </div>
                <div className='div-image-aula'>
                    <div className='image-aula'>
                    </div>
                    <button className='button-aula'  onClick={() => {router.push('https://api.whatsapp.com/send?phone=5513991452353&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita!%20')}} name='Botão de agendar aulas' style={{height: '15%', width: '40%'}}>AGENDE AGORA!</button>
                </div>
            </div>
        </div>
    )
}
export default Aula;
//# sourceMappingURL=swiper-bundle.js.map