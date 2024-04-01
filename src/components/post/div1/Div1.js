import './Div1.css'
import Image from 'next/image';

function Div1() {

    return (
        <div className="div1-background">
            <div style={{display: 'flex', width: '80%'}}>
                <div className='div-text-div1'>
                    <h1 className='title-div1'><span style={{ color: 'black' }}>TYNKOINS!</span></h1>
                    <h2 className='subtitle-div1'>O conteúdo pode mudar de acordo com o post, portanto, imagens e afins podem  ser dispostos da maneira com a qual a equipe achar necessário, bem como possível no Notion (plataforma a ser utilizada para os posts). </h2>
                    <div className='div-buttons-div1'>
                        <button className='button-type-2'>Ler mais!</button>
                    </div>
                </div>
                <Image
                    src="/images/image-div1-sobre.webp"
                    width={450}
                    height={338}
                    priority={true}
                    alt='Foto da Tynkers, a melhor escola da técnologia'
                />
            </div>
        </div>
    )
}
export default Div1;
//# sourceMappingURL=swiper-bundle.js.map