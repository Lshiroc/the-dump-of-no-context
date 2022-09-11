import style from './header.module.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, setState } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from '../../assets/images/menu-icon.svg';

export default function Header() { 
    const [toggleMenu, setToggleMenu] = useState(false);

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
                    <div className={`${style.mobileMenuBtn} ${toggleMenu ? style.menuBtnOpen : ''}`} onClick={() => setToggleMenu(!toggleMenu)}>
                        <img src={menuIcon} alt="menu" />
                    </div>
                </nav>
                <ul className={`${style.toggleMenu} ${toggleMenu ? style.openToggleMenu : ''}`}>
                        <li className={style.toggleMenuItem}><NavLink to='/'>Home</NavLink></li>
                        <li className={style.toggleMenuItem}><NavLink to='/replies'>Replies</NavLink></li>
                        <li className={style.toggleMenuItem}><NavLink to='/lore'>Lore</NavLink></li>
                        <li className={style.toggleMenuItem}><NavLink to='/about'>About</NavLink></li>
                    </ul>
            </header>
        </>
    )
}
