import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>CRIAÇÃO DE <span style={{color: '#00D96C'}}>JOGOS</span></h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-6.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    No universo emocionante do Desenvolvimento de Games, nossos alunos embarcam em uma jornada incrível, aprendendo desde a essência até os detalhes intricados que transformam uma ideia em um jogo cativante. O módulo abrange não apenas a lógica por trás do game, mas também sua funcionalidade, layout, estrutura e todas as características que convertem uma visão em uma experiência interativa.

Para os entusiastas de jogos 2D, utilizamos a plataforma Construct, proporcionando uma abordagem prática e envolvente. Os layouts 2D são aprimorados com imagens do Pexels, garantindo uma estética visual impressionante que cativa os jogadores desde o primeiro momento.
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                    Já para os amantes dos mundos tridimensionais, nosso curso explora o desenvolvimento de jogos 3D usando a poderosa combinação de Unity (com VS Code) e linguagem C#. Para a modelagem 3D, introduzimos a ferramenta Blender, permitindo aos alunos criarem personagens e ambientes tridimensionais de tirar o fôlego.

Além da programação essencial, o módulo abrange uma gama de habilidades fundamentais para o desenvolvimento completo de um jogo. Os alunos aprendem técnicas de modelagem 3D, animação, sonorização, roteiros, contextualização e muito mais. Essa abordagem holística garante que nossos alunos se tornem desenvolvedores de jogos completos, capazes de conceber e dar vida a experiências únicas.
                    </p>
                    <Image
                        src="/images/curso-2.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-7.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Assim como em nossos outros módulos, o Desenvolvimento de Games serve como uma peça fundamental na formação dos alunos. Ao concluírem este módulo, estarão prontos não apenas para criar jogos envolventes, mas também para explorar outros fascinantes campos oferecidos pela Tynkers.

Não perca a oportunidade de proporcionar ao seu filho(a) a chance de desvendar os segredos por trás dos jogos que tanto amam. Agende agora uma aula experimental totalmente gratuita e veja como o Desenvolvimento de Games pode abrir portas para um futuro cheio de criatividade e inovação!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map