import './Modulos.css'
import Image from 'next/image';

function Modulos  () {

    return(
        <div className="modulos-background">
            <h2 className='title-modulos'>NOSSOS <span style={{color: '#00D96C'}}>MODULOS</span>!</h2>
            <div className='div-modulos'>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-1.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                        Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo consectetur.
                    </p>
                </div>
                <div className='div-item-modulos reverse'>
                    <p className='text-item-modulo'>
                        Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo consectetur.
                    </p>
                    <Image
                        src="/images/curso-2.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                </div>
                <div className='div-item-modulos'>
                    <Image
                        src="/images/curso-3.webp"
                        width={75}
                        height={75}
                        loading='lazy'
                        alt='Imagem que representa aprendizagem'
                    />
                    <p className='text-item-modulo'>
                        Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo consectetur.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Modulos;
//# sourceMappingURL=swiper-bundle.js.map