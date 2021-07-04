import React from 'react'
import './Header.css';
import SideNav from '../Sidebar/Sidebar';
import AllLinks from '../Link/AllLinks';


export default function Header() {
    return (
        <div>
         
            <header className='mainHeader'>
                <AllLinks />
                <div className="MySideBar">
                    <SideNav />
                </div>
            </header>
        </div>
    )
}
