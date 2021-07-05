import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Sneakers17</h1>
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
