import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/contato/div1/Div1'
import Formulario from '../../components/contato/formulario/Formulario'
import Redes from '../../components/contato/redes/Redes'

export default function Contato() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Div1/>
        <Redes/>
        <Formulario/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map