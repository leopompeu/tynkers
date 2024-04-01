import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>CRIANDO APPS</h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-14.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Em nossa jornada de aprendizado em desenvolvimento de aplicativos, mergulhamos no excitante mundo do App Inventor do MIT, uma plataforma intuitiva que permite aos alunos transformar suas ideias em aplicativos funcionais sem a necessidade de codificação complexa.

Neste curso avançado de programação em blocos, os alunos são desafiados a criar clones de aplicativos da vida real, como WhatsApp, Instagram e muito mais. Ao desenvolver esses projetos, os alunos aplicam seus conhecimentos de programação de forma prática e criativa, explorando conceitos avançados enquanto constroem aplicativos que refletem o mundo ao seu redor.
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                    Um dos aspectos mais empolgantes deste curso é que, ao final dos projetos, os alunos têm a oportunidade de gerar um aplicativo instalável em seus próprios dispositivos móveis. Embora esses aplicativos não sejam publicados nas lojas de aplicativos, os alunos têm a satisfação de ver suas criações ganharem vida em seus próprios smartphones ou tablets.

Além de desenvolver habilidades técnicas em programação, os alunos também cultivam habilidades de resolução de problemas, pensamento crítico e criatividade. Eles aprendem a trabalhar em equipe, a comunicar suas ideias de forma eficaz e a iterar e aprimorar seus aplicativos em resposta ao feedback.
                    </p>
                    <Image
                        src="/images/curso-15.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-16.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Este curso não apenas capacita os alunos a criar aplicativos incríveis, mas também os inspira a explorar novas possibilidades e a se tornarem os criadores de tecnologia do futuro.

Não perca a chance de fazer parte desta emocionante jornada de aprendizado. Agende agora mesmo uma aula experimental gratuita e dê ao seu filho(a) a oportunidade de transformar suas ideias em aplicativos funcionais e inovadores!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map