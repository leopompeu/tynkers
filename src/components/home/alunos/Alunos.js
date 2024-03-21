'use client'

import './Alunos.css'
import Image from 'next/image';
import Player from '../../global-components/player/Player'
import { useRouter } from 'next/navigation';

function Aluno() {

    const router = useRouter();

    return(
        <div className="aluno-background">
            <h2 className='title-aluno'>NOSSOS <span style={{color: '#00D96C'}}>ALUNOS</span></h2>
            <div className='div-alunos'>
                <div style={{width: '100%', display: 'flex', gap: '30px', justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                        src="/images/arrow.webp"
                        width={50}
                        height={50}
                        loading='lazy'
                        className='button-video'
                        alt='Botão alterar o video de depoimento da Escola de técnologia Tynkers'
                    />
                    <div className='cellphone-mask'>
                        <div style={{backgroundColor: 'black', marginLeft: '13px', height: '445px', width: '210px', marginTop:'10px', borderRadius: '20px'}}>
                            <Player/>
                        </div>
                    </div>
                    <Image 
                        src="/images/arrow2.webp"
                        width={50}
                        height={50}
                        loading='lazy'
                        className='button-video'
                        alt='Botão alterar o video de depoimento da Escola de técnologia Tynkers'
                    />
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className='text-social-media'>Nossos alunos(as) alcançam conquistas incríveis todos os dias! Acompanhe os resultados de seus programas, jogos, robôs e muito mais, em nossas redes sociais!</p>
                    <div style={{display: 'flex', marginTop: '2.5%', gap: '20px', width: '100%', justifyContent: 'center'}}>
                        <Image
                            src="/images/facebook.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://www.facebook.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <Image
                            src="/images/instagram.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://instagram.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o instagram da Escola de técnologia Tynkers'
                        />
                        <Image
                            src="/images/tiktok.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('/blog')}}
                            className='image-social-media'
                            alt='Botão para o tiktok da Escola de técnologia Tynkers'
                        />
                    </div>
                    <div style={{marginTop: '2.5%', gap: '5px', display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', gap: '5px'}}>
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                        </div>
                        <div style={{display: 'flex', gap: '5px'}}>
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                        </div>
                        <div style={{display: 'flex', gap: '5px'}}>
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                            <Image
                                src="/images/placeholder-posts.webp"
                                width={125}
                                height={125}
                                loading='lazy'
                                className='post-social-media'
                                alt='Um dos posts da Escola de técnologia Tynkers'                            
                            />
                        </div>
                    </div>
                    <button style={{marginTop: '2.5%'}} onClick={() => {router.push('https://instagram.com/tynkerspg')}} className='button-type-2'>SIGA AS NOSSAS REDES SOCIAS!</button>
                </div>
            </div>
        </div>
    )
}
export default Aluno;
//# sourceMappingURL=swiper-bundle.js.map