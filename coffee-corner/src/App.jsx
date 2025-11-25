
import Home from './components/Pages/Home.jsx'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import About from './components/Pages/About.jsx'
import Login from './components/Pages/login.jsx'
import AddMenu from './components/Pages/Addmenu.jsx'
import Footer from './components/layout/Footer1.jsx'
import Register from './components/Pages/register.jsx'
import Dashboard from './components/Pages/dashboard.jsx'
import Updatemenu from './components/Pages/updatemenu.jsx'
import ViewMenu from './components/Pages/viewmenu.jsx'
function App() {
  

  return (
    <>
      <Router>

        <Header/>
        
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addmenu' element={<AddMenu/>}/>
          <Route path='/register' element={ <Register/> }/>
          <Route path='/dash' element={<Dashboard/>}/>
          <Route path='/updatemenu' element={<Updatemenu/>}/>
          <Route path='/ViewMenu' element={<ViewMenu/>}/>
        </Routes>
          <Footer/>
      </Router>
    
    </>
  )
}

export default App;
