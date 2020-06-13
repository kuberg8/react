import React from 'react';
import  hd from './header.module.css';

import {NavLink} from 'react-router-dom'

function Header(props) {
  return (
    <div className={hd.header}>
    	<div className={hd.container}>
	    		<span><b>{props.login ? props.login + "Book" : "OлолешаBook"}</b></span>
	    		<span>
	    			{ props.isAuth 
            ?
              <div><button onClick={props.logout} className={hd.logout}>Logout</button></div> 
            : 
              <NavLink to={'/login'}>Login</NavLink> }
	    		</span>	
    	</div>
    	
    </div>
  )
}


export default Header;