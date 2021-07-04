import React from 'react'
import './HeaderFooter.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function HeaderFooter({ children }) {
    return (
        <div className='Maindiv0'>
           <Header/>

            {children}

        <Footer/>

        </div>
    )
}
