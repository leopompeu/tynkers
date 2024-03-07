import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({ subsets: ['latin'],  weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Tynkers, Escola de técnologia',
  description: 'A Tynkers é a escolha perfeita para quem quer aprender a programar. Oferecemos cursos e aulas online e presenciais.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
//# sourceMappingURL=swiper-bundle.js.map