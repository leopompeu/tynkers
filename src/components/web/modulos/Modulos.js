import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>SITES E APLICAÇÕES</h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-8.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Em nosso fascinante percurso educacional, o Desenvolvimento Web emerge como uma experiência enriquecedora para nossos alunos. Este módulo não apenas introduz, mas mergulha profundamente no universo da criação de páginas e aplicações web, fornecendo as habilidades essenciais para conceber e dar vida a projetos incríveis.

A base deste aprendizado reside no domínio de linguagens cruciais, como HTML, CSS, JavaScript, PHP e MySQL. Nossos alunos não apenas conhecem, mas aplicam essas linguagens de forma prática e eficaz, capacitando-os a criar sistemas web completos, abrangendo desde a estrutura visual (front-end) até o gerenciamento de dados nos bastidores (back-end).
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                    Na jornada do Desenvolvimento Web, utilizamos a poderosa IDE Sublime, proporcionando um ambiente de aprendizado intuitivo e eficiente. Aqui, os alunos têm a oportunidade de transformar suas ideias em realidade, saindo do papel e ganhando vida na forma de páginas e aplicações web interativas.

Este módulo não é apenas uma aula de codificação; é uma experiência de construção, onde os alunos desenvolvem suas capacidades de problem-solving, criatividade e pensamento lógico. Ao final deste curso, eles não apenas compreenderão as nuances do desenvolvimento web, mas também terão criado sistemas funcionais, integrando front-end, back-end e banco de dados de forma harmoniosa.
                    </p>
                    <Image
                        src="/images/curso-9.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-10.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                    Preparamos nossos alunos para enfrentar os desafios do mundo digital, capacitando-os a criar soluções inovadoras e prontos para explorar novos horizontes no vasto campo do Desenvolvimento Web.

Não perca a chance de dar ao seu filho(a) a oportunidade de se destacar nesse cenário tecnológico em constante evolução. Agende agora mesmo uma aula experimental, e permita que eles construam o futuro da web com as próprias mãos, de forma gratuita!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map