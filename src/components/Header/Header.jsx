import style from './header.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, setState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() { 
    return (
        <>
            <header className={`section-x padding-x ${style.header}`}>
                <nav className={style.navbar}>
                    <h1 className={style.logo}><a href="#">Dump Of No-Context</a></h1>
                    <ul className={style.menu}>
                        <li className={style.menuItem}><NavLink to='/'>Home</NavLink></li>
                        <li className={style.menuItem}><NavLink to='/replies'>Replies</NavLink></li>
                        <li className={style.menuItem}><NavLink to='/lore'>Lore</NavLink></li>
                        <li className={style.menuItem}><NavLink to='/about'>About</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
