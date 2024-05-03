import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.tsx'
import Branner from './Branner.tsx'
import CardProducts from './Cards.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Branner/>
    <CardProducts/>
  </React.StrictMode>,
)
