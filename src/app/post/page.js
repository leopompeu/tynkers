import Header from '../../components/global-components/header/Header'
import Footer from '../../components/global-components/footer/Footer'
import Whatsapp from '../../components/global-components/whatsapp/Whatsapp'
import Div1 from '../../components/post/div1/Div1'
import Conteudo from '../../components/post/conteudo/Conteudo'
import Post from '../../components/post/outros/Outros'

export default function Blog() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Div1/>
        <Conteudo/>
        <Post/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map