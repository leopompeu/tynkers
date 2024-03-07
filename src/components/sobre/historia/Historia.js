import './Historia.css'
import Image from 'next/image';

function Historia() {

    return(
        <div className="historia-background">
            <h2 className='title-historia'>DESDE <span style={{color: '#00D96C'}}>2018</span></h2>
            <div className='div-historia'>
                <div className='div-item-historia' style={{marginBottom: '2.5%'}}>
                    <Image
                        src="/images/image-historia1.webp"
                        width={350}
                        height={350}
                        priority={false}
                        alt='Fotos da história Tynkers, a melhor escola da técnologia'  
                    />
                    <p className='text-historia'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus a orci eu ullamcorper. Nulla a aliquam nisl. Curabitur mattis tempus rhoncus. Nam id odio quis dolor blandit condimentum. Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='div-item-historia'>
                    <p className='text-historia' style={{textAlign: 'start'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus a orci eu ullamcorper. Nulla a aliquam nisl. Curabitur mattis tempus rhoncus. Nam id odio quis dolor blandit condimentum. Nullam vestibulum leo eget nibh vehicula, ut rhoncus mauris ultricies. Sed semper turpis et nisi sagittis, ac eleifend justo consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Image
                        src="/images/image-historia2.webp"
                        width={350}
                        height={350}
                        priority={false}
                        alt='Fotos da história Tynkers, a melhor escola da técnologia'  
                    />
                </div>
            </div>
        </div>
    )
}
export default Historia;
//# sourceMappingURL=swiper-bundle.js.map