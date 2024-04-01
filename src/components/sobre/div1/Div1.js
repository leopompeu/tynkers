'use client'

import { useRouter } from 'next/navigation';
import './Div1.css'
import Image from 'next/image';

function Div1() {

    const router = useRouter()

    return(
        <div className="div1-background">
            <div className='div-text-div1'>
                <h1 className='title-div1'><span style={{color: 'black'}}>Sobre </span><span style={{color: '#FF00E6'}}>nós</span><span style={{color: 'black'}}>!</span></h1>
                <h2 className='subtitle-div1'>Conheça um pouco da história da <b>Tynkers</b>, a <b>melhor</b> escola de tecnologia para crianças e adolescentes da <b>Baixada Santista!</b></h2>
                <div className='div-buttons-div1'>
                    <button className='button-type-2' onClick={() => {router.push('https://api.whatsapp.com/send?phone=5513991452353&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita!%20')}} name='Botão de agendar aulas'>Agende uma aula!</button>
                </div>
            </div>
            <Image
                src="/images/image-div1-sobre.webp"
                width={450}
                height={338}
                priority={true}
                alt='Foto da Tynkers, a melhor escola da técnologia'
            />
        </div>
    )
}
export default Div1;
//# sourceMappingURL=swiper-bundle.js.map