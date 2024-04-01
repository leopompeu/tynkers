'use client'

import './Redes.css'
import Image from 'next/image';
import Player from '../../global-components/player/Player'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Redes() {

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
        setImage1(feedList[0][0].media_type == 'IMAGE' ? feedList[0][0].media_url : '/images/placeholder-ig.webp')
        setImage2(feedList[0][1].media_type == 'IMAGE' ? feedList[0][1].media_url : '/images/placeholder-ig.webp')
        setImage3(feedList[0][2].media_type == 'IMAGE' ? feedList[0][2].media_url : '/images/placeholder-ig.webp')
        setImage4(feedList[0][3].media_type == 'IMAGE' ? feedList[0][3].media_url : '/images/placeholder-ig.webp')
        setImage5(feedList[0][4].media_type == 'IMAGE' ? feedList[0][4].media_url : '/images/placeholder-ig.webp')
        setImage6(feedList[0][5].media_type == 'IMAGE' ? feedList[0][5].media_url : '/images/placeholder-ig.webp')
        setImage7(feedList[0][6].media_type == 'IMAGE' ? feedList[0][6].media_url : '/images/placeholder-ig.webp')
        setImage8(feedList[0][7].media_type == 'IMAGE' ? feedList[0][7].media_url : '/images/placeholder-ig.webp')
        setImage9(feedList[0][8].media_type == 'IMAGE' ? feedList[0][8].media_url : '/images/placeholder-ig.webp')
    }

    useEffect(() => {
        getInstaFeed()
    }, [])

    return(
        <div className="aluno-background">
            <div className='div-alunos'>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center', alignItems: 'center'}}>
                    <h2 className='title-aluno'><span style={{color: '#00D96C'}}>CONTATOS</span></h2>
                    <div style={{display: 'flex', justifyContent: 'center', width: '50%', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/mail.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>contato@tynkers.com.br</p>
                    </div>
                    <div style={{display: 'flex', width: '50%', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/zap.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>(13) 99145-2353</p>
                    </div>
                    <div style={{display: 'flex',  width: '50%' ,justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
                        <Image
                            src="/images/tel.webp"
                            width={50}
                            height={50}
                            loading='lazy'
                            className='image-social-media'
                            alt='Botão para o facebook da Escola de técnologia Tynkers'
                        />
                        <p className='text-social-media'>(13) 99145-2353</p>
                    </div>
                    <div style={{display: 'flex',  width: '50%' , justifyContent: 'center', alignItems: 'flex-start', gap: '15px'}}>
                        <Image
                            src="/images/map.webp"
                            width={50}
                            height={50}
                            loading='lazy'
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
                            onClick={() => {router.push('https://www.tiktok.com/@tynkerspg')}}
                            className='image-social-media'
                            alt='Botão para o tiktok da Escola de técnologia Tynkers'
                        />
                    </div>
                    <div style={{marginTop: '2.5%', gap: '5px', display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', gap: '5px'}}>
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
                        <div style={{display: 'flex', gap: '5px'}}>
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
                        <div style={{display: 'flex', gap: '5px'}}>
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
                    <button style={{marginTop: '2.5%'}} onClick={() => {router.push('https://instagram.com/tynkerspg')}} className='button-type-2'>SIGA AS NOSSAS REDES SOCIAS!</button>
                </div>
            </div>
        </div>
    )
}
export default Redes;
//# sourceMappingURL=swiper-bundle.js.map