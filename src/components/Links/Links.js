import React from 'react';
import  cl from './links.module.css';

import {NavLink} from 'react-router-dom';

function Links() {
  return (
    <div className={cl.links}>
        <NavLink to="profile" activeClassName={cl.active}>
        	<div className={cl.item}>
        		Моя страница
        	</div>
        </NavLink>
        <NavLink to="dialogue" activeClassName={cl.active}>
        	<div className={cl.item}>
        		Сообщения
        	</div>
        </NavLink>
        <NavLink to="friends" activeClassName={cl.active}>
            <div className={cl.item}>
                Друзья
            </div>
        </NavLink>
        <NavLink to="music" activeClassName={cl.active}>
        	<div className={cl.item}>
        		Музыка
        	</div>
        </NavLink>
        <NavLink to="Users" activeClassName={cl.active}>
            <div className={cl.item}>
                Пользователи
            </div>
        </NavLink>
    </div>
  )
}


export default Links;