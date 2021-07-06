import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import Logo from '../../images/logo.svg';
import CartWidget from './CartWidget';

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
                    <NavBtnLink to="/carrito">
                        <CartWidget/>
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;

function ItemListContainer(){
    alert("Working");
};
