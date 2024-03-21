import './Aulas.css'
import Image from 'next/image';

function Aula() {

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
                    <button className='button-aula' name='Botão de agendar aulas' style={{height: '15%', width: '40%'}}>AGENDE AGORA!</button>
                </div>
            </div>
        </div>
    )
}
export default Aula;
//# sourceMappingURL=swiper-bundle.js.map