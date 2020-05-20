import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './index.css'

const Layout  = ({children}) => (
    <>
        <Navbar/>
        <main className = "main">
            {children}
        </main>
        <Footer/>
    </>
)

export default Layout;