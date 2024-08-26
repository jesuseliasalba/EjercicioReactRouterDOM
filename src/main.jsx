import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from "./pages/home/home";
import Characters from "./pages/characters/characters"
import Character from "./pages/character/character"
import Contact from "./pages/contact/contact"
import NotFound from "./pages/NotFound/NotFound"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App/> } >
        <Route index element={ <Home/> } />
        <Route path="characters" element={ <Characters/> } />
        <Route path="character/:id" element={ <Character />} />
        <Route path='contact' element={ <Contact/> } />      
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
