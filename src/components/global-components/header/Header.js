import Image from "next/image";
import './Header.css'

function Header() {
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
                    <button className="button-type-1" name="Botão de para agendar uma aula">Agende uma aula!</button>
                    <div className="button-aluno">
                        <Image
                            src="/images/user-icon.webp"
                            width={20}
                            height={10}
                            alt="Ícone de usuário"
                        />
                        <p>Já sou aluno</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
//# sourceMappingURL=swiper-bundle.js.map