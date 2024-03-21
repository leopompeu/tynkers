import Header from '../components/global-components/header/Header'
import Footer from '../components/global-components/footer/Footer'
import Whatsapp from '../components/global-components/whatsapp/Whatsapp'
import Div1 from '../components/home/div1/Div1'
import Metodologia from '../components/home/metodologia/Metodologia'
import Aulas from '../components/home/aula/Aulas'
import Blog from '../components/home/blog/Blog'
import Alunos from '../components/home/alunos/Alunos'
import Contato from '../components/home/contato/Contato'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className="flex min-h-screen flex-col items-center justify-between p-24" style={{overflowX: 'hidden'}}>
        <Div1/>
        <Metodologia/>
        <Aulas/>
        <Blog/>
        <Alunos/>
        <Contato/>
      </div>
      <Whatsapp/>
      <Footer/>
    </main>
  )
}
//# sourceMappingURL=swiper-bundle.js.map