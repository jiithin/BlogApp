import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Projects from './Pages/Projects'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'

function App() {


  return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      
      <Route path="/projects" element={<Projects />} />
      
     </Routes>
     <Footer/>
     </BrowserRouter>
  )
}

export default App
