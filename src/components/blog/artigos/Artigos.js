'use client'

import { useRouter } from 'next/navigation';
import './Artigos.css'
import Image from 'next/image';

function Artigos() {

    const router = useRouter();

    const imageStyle = {
        borderRadius: '20px 20px 0 0',
    }

    return(
        <div className="blog-background">
            <h2 className='title-blog-home'>NAVEGUE PELOS NOSSOS <span style={{color: '#00D96C'}}>ARTIGOS</span></h2>
            <div className='div-posts-home' style={{marginTop: '2.5%'}}>
                <div className='card-post-home' onClick={() => router.push('/post')}>
                    <Image
                        src="https://images.unsplash.com/photo-1602377569011-e31152bc3a69?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600"
                        style={imageStyle}
                        width={450}
                        height={200}
                        loading='lazy'
                        alt='Alunos da escola de tecnologia Tynkers'
                    />
                    <div className='div-text-card-post-home'>
                        <h3 className='title-card-post-home'>Tynkoins</h3>
                        <p className='text-card-post-home'>O conteúdo pode mudar de acordo com o post, portanto, imagens e afins podem  ser dispostos da maneira com a qual a equipe achar necessário, bem como possível no Notion (plataforma a ser utilizada para os posts). </p>
                        <p className='button-card-post'>Saiba mais →</p>
                    </div>
                </div>
            </div>
            <button className='button-type-2' onClick={() => {router.push('/blog')}} style={{marginTop: '7.5%', width: '15%'}}>VEJA MAIS!</button>
        </div>
    )
}
export default Artigos;
//# sourceMappingURL=swiper-bundle.js.map