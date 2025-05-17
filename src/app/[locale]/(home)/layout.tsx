import Main from '@/components/home/Main'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import Contact from '@/components/home/Contact'

const Layout = ({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) => {

  return (
    <div>

      <Contact />

      <Header />

      <Main>{children}</Main>

      {modal}

      <Footer />

    </div>
  )
}

export default Layout