import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'

export default function App() {

  return (
    <>
      <div>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
      </div>
    </>
  )
}
