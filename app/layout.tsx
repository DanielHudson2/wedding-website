import './styles/main.scss'
import 'purecss/build/forms.css'
import Header from './components/Header'
import Footer from './components/Footer'
export const metadata = {
  title: 'Celine and Daniel | April 2024',
  description: 'Welcome to our wedding website you can find out everything you need here and RSVP.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
