import React,{Component, useState} from 'react';
import {menuItems} from './menuItems'
import './index.css';

const  Header =()=>{
    const[clicked, setClicked]= useState(false);
  return (
    <nav className="NavbarItems">
        <span className='navbar-logo'>
            Welcome,
        </span>
        <div className='menu-icon' onClick={()=>setClicked(!clicked)}>
            <i classsName={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'nav-menu active' :'nav-menu'}>
            {menuItems.map((item,index)=>{
                return (
                <li key={index} className={`nav-items-${index}`}>
                    <a className='nav-links' onClick={()=>{}}></a>
                </li>)
            })}            
        </ul>      
    </nav>
  );
} 
  
export default Header;
