import './Div1.css'

function Div1() {

    return(
        <div className="div1-background-blog">
            <div className='div-text-div1'>
                <p className='firts-text-div1'>ACOMPANHE O</p>
                <h1 className='title-div1'><span style={{color: 'black'}}>Nosso </span><span style={{color: '#FF00E6'}}>blog</span><span style={{color: 'black'}}>!</span></h1>
                <h2 className='subtitle-div1'>Mostramos a rotina da Tynkers, regada a diversão e aprendizado!</h2>
                <div className='div-buttons-div1'>
                    <button className='button-type-2'>Veja artigos!</button>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h2 className='second-title-div1'>DESTAQUE</h2>
                <div className='div-image-curso'>
                    <h3 className='title-curso-div1'>Programação</h3>
                    <button className='button-type-3'>Leia na íntegra!</button>
                </div>
            </div>
        </div>
    )
}
export default Div1;
//# sourceMappingURL=swiper-bundle.js.map