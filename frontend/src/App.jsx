import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Projects from './Pages/Projects'
import SignUp from './Pages/SignUp'
import Limbo from './Pages/Limbo'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PrivateRoute from './Components/PrivateRoute'
import CreatePost from './Pages/CreatePost'
import AdminPrivateRoute from './Components/AdminPrivateRoute'
import PostPage from './Pages/PostPage'


function App() {


  return (
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/processing" element={<Limbo />} />

      <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route element={<AdminPrivateRoute />}>
      <Route path="/create-post" element={<CreatePost />} />
      </Route>
      
      <Route path="/projects" element={<Projects />} />
      <Route path="/post" element={<PostPage />} />
      
     </Routes>
     <Footer/>
     </BrowserRouter>
  )
}

export default App
