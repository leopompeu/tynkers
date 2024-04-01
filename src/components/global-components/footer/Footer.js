'use client'

import { useRouter } from 'next/navigation';
import './Footer.css'
import Image from 'next/image';

function Footer() {
    const router = useRouter();

    return (
        <div className="footer-background">
            <div className='div-footer'>
                <div style={{ width: '100%' }}>
                    <Image
                        src="/images/tynkers-logo2.webp"
                        width={200}
                        height={150}
                        priority={false}
                        alt='Logo da tynkers, a melhor escola da técnologia'
                    />
                </div>
                <div style={{ width: '100%', marginRight: '5%' }}>
                    <h3 className='titles-footer'>Endereço</h3>
                    <p className='texts-footer'>Rua Jaú, 880 - sala 24, Boqueirão, Praia Grande - SP - CEP 11701-190</p>
                    <h3 className='titles-footer' style={{ marginTop: '1%' }}>Horários</h3>
                    <p className='texts-footer'>Segunda a Sexta - 08:00 às 18:00 Sábado - 08:00 às 12:00</p>
                </div>
                <div style={{ width: '100%' }}>
                    <h3 className='titles-footer' style={{ marginBottom: '1%' }}>Mapa do Site</h3>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a href='/' className='texts-footer'>• Home</a>
                        <a href='/cursos' className='texts-footer'>• Cursos</a>
                        <a href='/sobre' className='texts-footer'>• Sobre nós</a>
                        <a href='/blog' className='texts-footer'>• Blog</a>
                        <a href='/contato' className='texts-footer'>• Contatos</a>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    <h3 className='titles-footer' style={{ marginBottom: '1%', width: '100%', textAlign: 'start' }}>Mapa do Site</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '5%' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Image
                                style={{ cursor: 'pointer' }}
                                onClick={() => router.push("https://www.instagram.com/tynkerspg/")}
                                src="/images/instagram.webp"
                                width={50}
                                height={50}
                                priority={false}
                                alt='Instagram da tynkers, a melhor escola da técnologia'
                            />
                            <Image
                                style={{ cursor: 'pointer' }}
                                onClick={() => router.push("https://www.facebook.com/tynkerspg/")}
                                src="/images/facebook.webp"
                                width={50}
                                height={50}
                                priority={false}
                                alt='Facebook da tynkers, a melhor escola da técnologia'
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Image
                                style={{ cursor: 'pointer' }}
                                onClick={() => router.push("https://www.facebook.com/tynkerspg/")}
                                src="/images/whatsapp.webp"
                                width={50}
                                height={50}
                                priority={false}
                                alt='Whatsapp da tynkers, a melhor escola da técnologia'
                            />
                            <Image
                                style={{ cursor: 'pointer' }}
                                onClick={() => router.push("https://www.tiktok.com/@tynkerspg")}
                                src="/images/tiktok.webp"
                                width={50}
                                height={50}
                                priority={false}
                                alt='Tik Tok da tynkers, a melhor escola da técnologia'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='disclaimer'>
                <p className='disclaimer-text'>Tynkers Praia Grande ® 2023 Todos os Direitos Reservados</p>
            </div>
        </div>
    )
}
export default Footer;
//# sourceMappingURL=swiper-bundle.js.map