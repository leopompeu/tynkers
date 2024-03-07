import './Metodologia.css'
import Image from 'next/image';

function Metodologia() {

    return(
        <div className="metodologia-background">
            <h2 className='title-metodologia'>METODOLOGIA <span style={{color: '#00D96C'}}>INOVADORA</span></h2>
            <div className='div-metologia-infos'>
                <div style={{width: '80%'}}>
                    <p className='text-metodologia'>
                        Através da gameficação, nossos alunos(as) aprendem enquanto se divertem! 
                        Nosso game de progressão dos cursos e nossa moeda interna Tynkoins, 
                        garantem recompensas e sensação de dever cumprido para cada tarefa finalizada 
                        por nossos alunos(as)!
                    </p>
                    <Image
                        src="/images/robo-tynkers2.webp"
                        width={450}
                        height={450}
                        loading='lazy'
                        style={{marginTop: '-10%'}}
                        alt='Robo da tynkers, a melhor escola da técnologia'
                    />
                </div>
                <div style={{width: '100%'}}>
                    <h3 className='subtitle-metodologia'>NOSSOS <span style={{color: '#FF00E5'}}>CURSOS</span></h3>
                    <p className='text-cursos-metodologia'>
                        Navegue por nossos cursos e conheça os módulos e metodologia que 
                        transformarão o futuro de seu filho(a)!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Metodologia;
//# sourceMappingURL=swiper-bundle.js.map