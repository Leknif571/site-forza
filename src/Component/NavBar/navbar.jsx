import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, Link} from "@nextui-org/react";
import React from 'react';
import Iconforza from '../../assets/images/forzaLogo.png';

import './navbar.css';



export default function Navbari() {
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const togleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [{name:"ACCUEIL",path:"/"},{name:"CATALOGUE",path:"/catalogue"},{name:"CONTACT",path:"#footer"}];

  return (
  <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >

      <NavbarContent className="flex gap-4" justify="center">
        <NavbarBrand>
          <h1>
            <Link href="/" className="font-bold font-titlef text-red-500 text-xl">
              <img className="logo-forza" src={Iconforza} alt=""/>
            </Link>
          </h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex" justify="end" >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        
      </NavbarContent>



      <NavbarMenu className="bg-black items-center" >
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-white"
              href={item.path}
              size="lg"
              onClick={togleClick}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
