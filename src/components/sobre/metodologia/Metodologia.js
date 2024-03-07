import './Metodologia.css'
import Image from 'next/image';

function Metodologia() {

    return(
        <div className="metodologia-background">
            <h2 className='title-metodologia'>NOSSA <span style={{color: '#00D96C'}}>METODOLOGIA</span></h2>
            <div className='div-metologia-infos'>
                <div style={{width: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{marginBottom: '55%'}}>
                        <Image
                            src="/images/tyncoins-fig.webp"
                            width={400}
                            height={266}
                            loading='lazy'
                            alt='Image figurativa dos tyncoins, a moeda da Tynkers, a melhor escola da técnologia'
                        />
                        <Image
                            src="/images/tyncoins.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            style={{marginTop: '-72.5%', marginLeft: '80%'}}
                            alt='Image que simboliza os tyncoins, a moeda da Tynkers, a melhor escola da técnologia'
                        />
                    </div>
                    <p className='disclaimer-sobre' style={{marginTop: '2.5%'}}>Tynkoins - Imagem ilustrativa</p>
                </div>
                <div style={{width: '100%'}}>
                    <h3 className='subtitle-metodologia'>O QUE É <span style={{color: '#FF00E5'}}>GAMIFICAÇÃO</span></h3>
                    <p className='text-cursos-metodologia' style={{width: '80%'}}>
                        Através da gameficação, nossos alunos(as) aprendem enquanto se divertem! Nosso game de progressão dos cursos e nossa moeda interna Tynkoins, garantem recompensas e sensação de dever cumprido para cada tarefa finalizada por nossos alunos(as)!<br/><br/>Com o sistema de Tynkoins, os alunos recebem suas moedinhas virtuais ao ir às aulas, completar atividades e finalizar algum módulo!<br/><br/>E o mais legal: esse sistema permite que nossos alunos troquem suas moedinhas por brindes reais ou skins dentro de nosso game interativo, utilizado para ditar o ritmo das aulas e as atividades dos pequenos!
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Metodologia;
//# sourceMappingURL=swiper-bundle.js.map