import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/blog/div1/Div1'
import Recente from '../../components/blog/recente/Recente'
import Artigos from '../../components/blog/artigos/Artigos'

export default function Blog() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Div1/>
        <Recente/>
        <Artigos/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map