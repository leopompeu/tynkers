'use client'

import './Alunos.css'
import Image from 'next/image';
import Player from '../../global-components/player/Player'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Aluno() {
    const router = useRouter();
    const [feedList, setFeedList] = useState([])
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [image3, setImage3] = useState();
    const [image4, setImage4] = useState();
    const [image5, setImage5] = useState();
    const [image6, setImage6] = useState();
    const [image7, setImage7] = useState();
    const [image8, setImage8] = useState();
    const [image9, setImage9] = useState();


    async function getInstaFeed() {
        const fields = "media_url,media_type,permalink"

        const url = `https://graph.instagram.com/me/media?access_token=${'IGQWRQRFFFd08wVVRmWWF4UjdRUS0yN0JLVDFYSmJuQVJhelliSWhUSHNRTV9sQTRERWFaNnl4MlBYVjZAGQjlrREEzYlZArRnJOSXJKWXlsWmRVTGl1Ny1lLVo1akotZAGR1UVFub1AwcnFQSzNOU2ZA3LXJrb3piYU0ZD'}&fields=${fields}`
        const { data } = await axios.get(url);

        feedList.push(data.data)
        console.log(feedList)
        setImage1(feedList[0][0].media_url)
        setImage2(feedList[0][1].media_url)
        setImage3(feedList[0][2].media_url)
        setImage4(feedList[0][3].media_url)
        setImage5(feedList[0][4].media_url)
        setImage6(feedList[0][5].media_url)
        setImage7(feedList[0][6].media_url)
        setImage8(feedList[0][7].media_url)
        setImage9(feedList[0][8].media_url)

    }

    useEffect(() => {
        getInstaFeed()
    }, [])

    if (feedList != undefined) {
        return (
            <div className="aluno-background">
                <h2 className='title-aluno'>NOSSOS <span style={{ color: '#00D96C' }}>ALUNOS</span></h2>
                <div className='div-alunos'>
                    <div style={{ width: '100%', display: 'flex', gap: '30px', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            src="/images/arrow.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            className='button-video'
                            alt='Botão alterar o video de depoimento da Escola de técnologia Tynkers'
                        />
                        <div className='cellphone-mask'>
                            <div style={{ backgroundColor: 'black', marginLeft: '13px', height: '445px', width: '210px', marginTop: '12px', borderRadius: '20px' }}>
                                <Player />
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
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p className='text-social-media'>Nossos alunos(as) alcançam conquistas incríveis todos os dias! Acompanhe os resultados de seus programas, jogos, robôs e muito mais, em nossas redes sociais!</p>
                        <div style={{ display: 'flex', marginTop: '2.5%', gap: '20px', width: '100%', justifyContent: 'center' }}>
                            <Image
                                src="/images/facebook.webp"
                                width={50}
                                height={50}
                                loading='lazy'
                                onClick={() => { router.push('https://www.facebook.com/tynkerspg') }}
                                className='image-social-media'
                                alt='Botão para o facebook da Escola de técnologia Tynkers'
                            />
                            <Image
                                src="/images/instagram.webp"
                                width={50}
                                height={50}
                                loading='lazy'
                                onClick={() => { router.push('https://instagram.com/tynkerspg') }}
                                className='image-social-media'
                                alt='Botão para o instagram da Escola de técnologia Tynkers'
                            />
                            <Image
                                src="/images/tiktok.webp"
                                width={50}
                                height={50}
                                loading='lazy'
                                onClick={() => { router.push('/blog') }}
                                className='image-social-media'
                                alt='Botão para o tiktok da Escola de técnologia Tynkers'
                            />
                        </div>
                        <div style={{ marginTop: '2.5%', gap: '5px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <Image
                                    src={image1}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image2}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image3}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <Image
                                    src={image4}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image5}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image6}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                            </div>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <Image
                                    src={image7}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image8}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                                <Image
                                    src={image9}
                                    width={125}
                                    height={125}
                                    loading='lazy'
                                    className='post-social-media'
                                    alt='Um dos posts da Escola de técnologia Tynkers'
                                />
                            </div>
                        </div>
                        <button style={{ marginTop: '2.5%' }} onClick={() => { router.push('https://instagram.com/tynkerspg') }} className='button-type-2'>SIGA AS NOSSAS REDES SOCIAS!</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Aluno;
//# sourceMappingURL=swiper-bundle.js.map