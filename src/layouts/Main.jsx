import Header from "../components/Header"
import Footer from "../components/Footer"

const Main = ({children}) => {
  return (
    <>
    <Header />
     {children}
    <Footer />    
    </>
  )
}

export default Main
// este layout se forma con la mayoria de los componentes que 
// van a estar en la mayoria de las pags
// y este lo importa a App.jsx