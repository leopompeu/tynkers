import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>O <span style={{color: '#00D96C'}}>INÍCIO</span></h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-1.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    A Lógica de Programação é o primeiro universo visitado por nossos alunos! Através dela, todos estarão preparados para os demais módulos da Tynkers, que abrangem desde a programação de sites e jogos, até a criação de robôs funcionais.
                    Obrigatoriamente, nossos alunos passam por esse módulo para que possam aprender a lógica por trás da tecnologia que trabalhamos, como por exemplo estruturas de repetição, variáveis, booleanos, funções, condicionais e muito mais.
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                    Com todo esse aprendizado, nossos pequenos serão capazes de destrinchar qualquer problema em problemas menores, para resolver aos poucos de forma inteligente e eficaz todos os desafios a que forem colocados.
 
Para os alunos mais iniciantes, ou até mesmo os mais novos, utilizados a plataforma do Code, para um aprendizado mais lúdico e visual, de uma forma com que todos possam aprender do zero. Já para os alunos um pouco mais velhos e mais experientes, utilizamos o Scretch, uma plataforma de aprendizado criada no MIT (do inglês, Instituto de Tecnologia de Massachusetts), que permite um aprendizado mais prático e avançado, não deixando de fora elementos importantes como as partes visuais e lúdicas de que um aluno precisa!
                    </p>
                    <Image
                        src="/images/curso-5.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-4.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    A programação em si, é feita com a Programação em Bloco, ou “Arrasta e solta”, utilizada apenas para ensinar do básico ao avançado, todos os conceitos de lógica de programação e resolução de problemas. Este módulo, reserva para nossos alunos a ideia de que todo e qualquer desafio pode ser resolvido.
 
Quando termina este módulo, seu filho(a) estará apto(a) para estudar quaisquer outros módulos da Tynkers. Portanto, não perca tempo e agende agora uma aula experimental totalmente gratuita!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map