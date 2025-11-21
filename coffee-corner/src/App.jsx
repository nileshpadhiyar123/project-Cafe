import { useState } from 'react'
import Home from './components/Pages/Home.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import About from './components/Pages/About.jsx'
import Login from './components/Pages/login.jsx'
import AddMenu from './components/Pages/Addmenu.jsx'
import Footer from './components/layout/Footer1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Header/>
        
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addmenu' element={<AddMenu/>}/>
        </Routes>
          <Footer/>
      </Router>
    
    </>
  )
}

export default App;
