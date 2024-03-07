"use client"

import { redirect } from 'next/navigation';
import './Cursos.css'

function Curso  (){

    return(
        <div className="cursos-background">
            <h2 className='title-cursos'>NOSSOS <span style={{color: '#00D96C'}}>CUROS</span>!</h2>
            <div className='div-cursos'>
                <div className='div-row-cursos'>
                    <div className='item-cursos robotica'>
                        <h3 className='title-item-curso'>Desenvolvimento de Aplicativos</h3>
                        <button className='button-type-3' onClick={() => {redirect('/aplicativos')}}>Saiba mais!</button>
                    </div>
                    <div className='item-cursos robotica'>
                        <h3 className='title-item-curso'>Desenvolvimento de games</h3>
                        <button className='button-type-3'>Saiba mais!</button>
                    </div>
                    <div className='item-cursos robotica'>
                        <h3 className='title-item-curso'>Desenvolvimento Web</h3>
                        <button className='button-type-3'>Saiba mais!</button>
                    </div>
                </div>
                <div className='div-row-cursos'>
                    <div className='item-cursos robotica'>
                        <h3 className='title-item-curso'>Lógica de programação</h3>
                        <button className='button-type-3'>Saiba mais!</button>
                    </div>
                    <div className='item-cursos robotica'>
                        <h3 className='title-item-curso'>Robótica</h3>
                        <button className='button-type-3'>Saiba mais!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Curso;
