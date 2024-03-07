import './Diferencial.css'
import Image from 'next/image';

function Diferencial  () {

    return(
        <div className="diferenciais-background">
            <h2 className='title-diferenciais'>O QUE <span style={{color: '#00D96C'}}>GARANTIMOS</span></h2>
            <div className='row-diferenciais'>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-1.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Aprendizado</p>
                </div>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-2.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Diversão</p>
                </div>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-3.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Motivação</p>
                </div>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-1.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Aprendizado</p>
                </div>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-2.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Diversão</p>
                </div>
                <div className='item-diferenciais'>
                    <Image
                        src="/images/curso-3.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-diferenciais'>Motivação</p>
                </div>
            </div>
        </div>
    )
}
export default Diferencial;
//# sourceMappingURL=swiper-bundle.js.map