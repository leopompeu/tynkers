'use client'

import Image from "next/image";
import './Header.css'
import { useRouter } from "next/navigation";

function Header() {

    const router = useRouter();

    return (
        <header >
            <nav className="header-div">
                <Image
                    src="/images/tynkers.webp"
                    width={150}
                    height={60}
                    className="image-logo-header"
                    alt="Logo Tynkers, escola de técnologia"
                />
                <div className="div-links-header">
                    <a href="/" className="link-header">Home</a>
                    <a href="/cursos" className="link-header">Cursos</a>
                    <a href="/sobre" className="link-header">Sobre nós</a>
                    <a href="/blog" className="link-header">Blog</a>
                </div>
                <div className="div-buttons-header">
                    <button className="button-type-1" onClick={() => {router.push('https://api.whatsapp.com/send?phone=5513991452353&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita!%20')}} name="Botão de para agendar uma aula">Agende uma aula!</button>
                </div>
            </nav>
        </header>
    )
}

export default Header;
//# sourceMappingURL=swiper-bundle.js.map