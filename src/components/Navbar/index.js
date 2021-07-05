import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import Logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={Logo} alt='logo' height="50"/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/nosotros" activeStyle>
                        Somos
                    </NavLink>
                    <NavLink to="/productos" activeStyle>
                        Productos
                    </NavLink>
                    <NavLink to="/contacto" activeStyle>
                        Contacto
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/carrito">Carrito</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
