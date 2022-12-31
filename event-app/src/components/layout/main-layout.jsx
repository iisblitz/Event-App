import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Mainlayout = ({children}) => {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
    
    </>
  
  
    )
}

export default Mainlayout