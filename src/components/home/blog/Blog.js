import './Blog.css'
import Image from 'next/image';

function Blog() {

    const imageStyle = {
        borderRadius: '20px 20px 0 0',
    }

    return(
        <div className="blog-background">
            <h2 className='title-blog-home'>NOSSO <span style={{color: '#00D96C'}}>BLOG</span></h2>
            <div className='div-posts-home'>
                <div className='card-post-home'>
                    <Image
                        src="/images/placeholder-blog.webp"
                        style={imageStyle}
                        width={450}
                        height={200}
                        loading='lazy'
                        alt='Alunos da escola de tecnologia Tynkers'
                    />
                    <div className='div-text-card-post-home'>
                        <h3 className='title-card-post-home'>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</h3>
                        <p className='text-card-post-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit justo eros, a iaculis est aliquam ac. Vivamus consectetur facilisis tortor eu posuere.</p>
                        <p className='button-card-post'>Saiba mais →</p>
                    </div>
                </div>
                <div className='card-post-home'>
                    <Image
                        src="/images/placeholder-blog.webp"
                        style={imageStyle}
                        width={450}
                        height={200}
                        loading='lazy'
                        alt='Alunos da escola de tecnologia Tynkers'
                    />
                    <div className='div-text-card-post-home'>
                        <h3 className='title-card-post-home'>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</h3>
                        <p className='text-card-post-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit justo eros, a iaculis est aliquam ac. Vivamus consectetur facilisis tortor eu posuere.</p>
                        <p className='button-card-post'>Saiba mais →</p>
                    </div>
                </div>
                <div className='card-post-home'>
                    <Image
                        src="/images/placeholder-blog.webp"
                        style={imageStyle}
                        width={450}
                        height={200}
                        loading='lazy'
                        alt='Alunos da escola de tecnologia Tynkers'
                    />
                    <div className='div-text-card-post-home'>
                        <h3 className='title-card-post-home'>TEXTO TEXTO TEXTO TEXTO TEXTO TEXTO</h3>
                        <p className='text-card-post-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit justo eros, a iaculis est aliquam ac. Vivamus consectetur facilisis tortor eu posuere.</p>
                        <p className='button-card-post'>Saiba mais →</p>
                    </div>
                </div>
            </div>
            <button className='button-type-2' style={{marginTop: '5%', width: '15%'}}>VEJA MAIS!</button>
        </div>
    )
}
export default Blog;
//# sourceMappingURL=swiper-bundle.js.map