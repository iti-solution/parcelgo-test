import Main from '@/components/home/Main'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import ContactModal from '@/components/home/ContactModal'

const Layout = ({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) => {

  return (
    <div>

      <ContactModal />

      <Header />

      <Main>{children}</Main>

      {modal}

      <Footer />

    </div>
  )
}

export default Layout