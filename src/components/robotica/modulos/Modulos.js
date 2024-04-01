import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>CRIANDO <span style={{color: '#00D96C'}}>ROBÔS</span></h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-11.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Prepare-se para uma jornada emocionante no mundo da robótica com o nosso curso Maker! Aqui, os alunos são imersos em um ambiente de aprendizado inovador, onde exploram desde os conceitos básicos até as complexidades da engenharia robótica.

O cerne deste curso é a introdução ao fascinante mundo do Arduino, uma plataforma de hardware livre que permite a criação de projetos eletrônicos interativos. Nossos alunos mergulham na programação e no uso de uma variedade de sensores, incluindo som, infravermelho, luz e ultrassônico, para dar vida às suas criações.
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                    Desde a montagem de estruturas simples, como semáforos e luzes de LED, até a construção de robôs mais complexos, como braços mecânicos, nossos alunos são desafiados a aplicar seus conhecimentos em projetos práticos e empolgantes.

Além de desenvolver habilidades técnicas, como programação e eletrônica, este curso também promove o desenvolvimento de habilidades manuais e aprimora a coordenação motora dos alunos. Eles aprendem a pensar logicamente, a solucionar problemas de forma criativa e a trabalhar em equipe para alcançar seus objetivos.
                    </p>
                    <Image
                        src="/images/curso-12.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-13.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Nossas ferramentas de programação, como o MBlock e o Arduino IDE, proporcionam um ambiente de aprendizado acessível e envolvente, permitindo que os alunos experimentem e desenvolvam suas habilidades de programação de maneira prática.

Ao concluir este curso, os alunos terão adquirido uma base sólida em conceitos de robótica, além de habilidades essenciais que os prepararão para explorar novos horizontes no emocionante campo da tecnologia. Não perca a oportunidade de dar ao seu filho(a) a chance de se tornar um verdadeiro Maker! Agende agora mesmo uma aula experimental gratuita e deixe-os mergulhar no mundo da robótica com entusiasmo e determinação.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map