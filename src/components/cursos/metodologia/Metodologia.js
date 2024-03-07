import './Metodologia.css'
import Image from 'next/image';

function Metodologia() {

    return(
        <div className="metodologia-background">
            <h2 className='title-metodologia'>NOSSA <span style={{color: '#00D96C'}}>METODOLOGIA</span></h2>
            <div className='div-metologia-infos'>
                <div style={{width: '80%'}}>
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
                    <h3 className='subtitle-metodologia'>O QUE É <span style={{color: '#FF00E5'}}>GAMIFICAÇÃO</span></h3>
                    <p className='text-cursos-metodologia' style={{width: '80%'}}>
                        Através da gameficação, nossos alunos(as) aprendem enquanto se divertem! Nosso game de progressão dos cursos e nossa moeda interna Tynkoins, garantem recompensas e sensação de dever cumprido para cada tarefa finalizada por nossos alunos(as)!
                    </p>
                    <div style={{display: 'flex', width: '80%', justifyContent: 'space-between', marginTop: '2.5%'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                            <Image
                                src="/images/curso-1.webp"
                                width={75}
                                height={75}
                                loading='lazy'
                                alt='Imagem que representa aprendizagem'
                            />
                            <p className='text-cursos-metodologia'>Aprendizado</p> 
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                            <Image
                                src="/images/curso-2.webp"
                                width={75}
                                height={75}
                                loading='lazy'
                                alt='Imagem que representa diversão'
                            />
                            <p className='text-cursos-metodologia'>Diversão</p> 
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
                            <Image
                                src="/images/curso-3.webp"
                                width={75}
                                height={75}
                                loading='lazy'
                                alt='Imagem que representa motivação'
                            />
                            <p className='text-cursos-metodologia'>Motivação</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Metodologia;
//# sourceMappingURL=swiper-bundle.js.map