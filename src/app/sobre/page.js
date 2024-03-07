import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/sobre/div1/Div1'
import Historia from '../../components/sobre/historia/Historia'
import Metodologia from '../../components/sobre/metodologia/Metodologia'
import Diferencial from '../../components/sobre/diferencial/Diferencial'
import Contato from '../../components/sobre/contato/Contato'

export default function Sobre() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{overflowX: 'hidden'}}>
        <Div1/>
        <Historia/>
        <Metodologia/>
        <Diferencial/>
        <Contato/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map