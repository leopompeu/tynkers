import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/games/div1/Div1'
import Modulos from '../../components/games/modulos/Modulos'
import Aula from '../../components/games/aula/Aula'
import Cursos from '../../components/games/cursos/Cursos'

export default function Games() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Div1/>
        <Modulos/>
        <Aula/>
        <Cursos/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map