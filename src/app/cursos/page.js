import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/cursos/div1/Div1'
import Metodologia from '../../components/cursos/metodologia/Metodologia'
import Aula from '../../components/cursos/aula/Aula'
import Curso from '../../components/cursos/cursos/Cursos'

export default function Cursos() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Div1/>
        <Metodologia/>
        <Curso/>
        <Aula/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map