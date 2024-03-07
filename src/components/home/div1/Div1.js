import './Div1.css'
import Image from 'next/image';

function Div1() {

    return(
        <div className="div1-background">
            <div className='div-text-div1'>
                <p className='firts-text-div1'>CONHEÇA A</p>
                <h1 className='title-div1'><span style={{color: 'black'}}>Melhor escola de </span><span style={{color: '#FF00E6'}}>Tecnologia</span><span style={{color: 'black'}}>!</span></h1>
                <h2 className='subtitle-div1'>Aposte na metodologia <span style={{fontWeight: '700'}}>Tynkers</span> e invista no futuro de seu filho(a)!</h2>
                <div className='div-buttons-div1'>
                    <button className='button-type-2'>Agende uma aula!</button>
                    <button className='button-type-3'>Conheça os cursos!</button>
                </div>
            </div>
            <Image
                src="/images/robo-tynkers.webp"
                width={450}
                height={450}
                priority={true}
                alt='Robo da tynkers, a melhor escola da técnologia'
            />
        </div>
    )
}
export default Div1;
//# sourceMappingURL=swiper-bundle.js.map