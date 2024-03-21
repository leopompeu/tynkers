'use client'

import './Redes.css'
import Image from 'next/image';
import Player from '../../global-components/player/Player'
import { useRouter } from 'next/navigation';

function Redes() {

    const router = useRouter();

    return(
        <div className="aluno-background">
            <div className='div-alunos'>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center', alignItems: 'center'}}>
                    <h2 className='title-aluno'><span style={{color: '#00D96C'}}>CONTATOS</span></h2>
                    <div style={{display: 'flex', justifyContent: 'center', width: '50%', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/facebook.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://www.facebook.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>contato@tynkers.com.br</p>
                    </div>
                    <div style={{display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/facebook.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://www.facebook.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>(13) 99999-9999</p>
                    </div>
                    <div style={{display: 'flex',  width: '50%' ,justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/facebook.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://www.facebook.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>(13) 99999-9999</p>
                    </div>
                    <div style={{display: 'flex',  width: '50%' , justifyContent: 'center', alignItems: 'flex-start', gap: '15px'}}>
                        <Image
                            src="/images/facebook.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            onClick={() => {router.push('https://www.facebook.com/tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>{"Rua Jaú, 880 - sala 24,\nBoqueirão, Praia Grande - SP\n- CEP 11701-190"}<br/><br/><span style={{fontWeight: '400'}}> {"Segunda a Sexta - 08:00 às 18:00\nSábado - 08:00 às 12:00"}</span></p>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 className='title-aluno'>REDES <span style={{color: '#00D96C'}}>SOCIAIS</span></h2>
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
export default Redes;
//# sourceMappingURL=swiper-bundle.js.map