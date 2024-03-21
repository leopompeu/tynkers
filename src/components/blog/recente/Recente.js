import './Recente.css'
import Image from 'next/image';

function Recente() {

    return(
        <div className="recente-background">
            <h2 className='title-recente'>ARTIGO MAIS <span style={{color: '#00D96C'}}>RECENTE</span></h2>
            <div className='div-recente-infos'>
                <div style={{width: '80%'}}>
                    <Image
                        src="/images/placeholder-recente.webp"
                        width={450}
                        height={450}
                        loading='lazy'
                        style={{marginTop: '0%'}}
                        alt='Robo da tynkers, a melhor escola da técnologia'
                    />
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <h3 className='subtitle-recente'>O FUTURO TE CHAMA <span style={{color: '#FF00E5'}}>HOJE</span></h3>
                    <p className='text-cursos-recente' style={{width: '80%'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus a orci eu ullamcorper. Nulla a aliquam nisl. Curabitur mattis tempus rhoncus. Nam id odio quis dolor blandit condimentum. Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo cons...
                    </p>
                    <button className='button-recente' name='Botão de para ler o post mais recente' style={{height: '15%', width: '40%'}}>AGENDE AGORA!</button>
                </div>
            </div>
        </div>
    )
}
export default Recente;
//# sourceMappingURL=swiper-bundle.js.map