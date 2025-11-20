import { useState } from 'react'
import Home from './components/Pages/Home.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import About from './components/Pages/About.jsx'
import Login from './components/Pages/login.jsx'

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

          
        </Routes>
      </Router>
    
    </>
  )
}

export default App
