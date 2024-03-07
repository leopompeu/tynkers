import './Div1.css'
import Image from 'next/image';

function Div1() {

    return(
        <div className="div1-background-cursos">
            <div className='div-text-div1'>
                <p className='firts-text-div1'>CONHEÇA OS</p>
                <h1 className='title-div1'><span style={{color: 'black'}}>Nossos </span><span style={{color: '#FF00E6'}}>cursos</span><span style={{color: 'black'}}>!</span></h1>
                <h2 className='subtitle-div1'>Desde lógica de programação, até desenvolvimento de games, robótica e muito mais!</h2>
                <div className='div-buttons-div1'>
                    <button className='button-type-2'>Agende uma aula!</button>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 className='second-title-div1'>DESTAQUE</h2>
                <div className='div-image-curso'>
                    <h3 className='title-curso-div1'>Programação</h3>
                    <button className='button-type-3'>Saiba mais!</button>
                </div>
            </div>
        </div>
    )
}
export default Div1;
//# sourceMappingURL=swiper-bundle.js.map