import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import Header from './components/header'
import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
