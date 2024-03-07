import './Cursos.css'
import Image from 'next/image';

function Cursos() {

    return (
        <div className="cursos-background">
            <h2 className='title-cursos'>OUTROS <span style={{ color: '#00D96C' }}>CURSOS</span>!</h2>
            <div className='div-row-cursos'>
                <div className='item-cursos robotica'>
                    <h3 className='title-item-curso'>Desenvolvimento de games</h3>
                    <button className='button-type-3'>Saiba mais!</button>
                </div>
                <div className='item-cursos robotica'>
                    <h3 className='title-item-curso'>Robótica</h3>
                    <button className='button-type-3'>Saiba mais!</button>
                </div>
                <div className='item-cursos robotica'>
                    <h3 className='title-item-curso'>Desenvolvimento Web</h3>
                    <button className='button-type-3'>Saiba mais!</button>
                </div>
                <div className='item-cursos robotica'>
                    <h3 className='title-item-curso'>Desenvolvimento de aplicativos</h3>
                    <button className='button-type-3'>Saiba mais!</button>
                </div>
            </div>
            <button className='button-type-2'>Ver mais</button>
        </div>
    )
}
export default Cursos;
//# sourceMappingURL=swiper-bundle.js.map