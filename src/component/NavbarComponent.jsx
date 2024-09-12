import React from 'react'
import { Navbar } from "flowbite-react";
import logo from "../assets/logo.png"
import { navList } from '..';
const NavbarComponent = () => {
  return (
    <Navbar fluid rounded className='lg:px-12 fixed top-0 w-full z-10'>
    <Navbar.Brand  href="#">
      <img src={logo} className="mr-3 h-10 object-cover w-40" alt="Flowbite React Logo" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
    {navList.map((item)=>(
          <Navbar.Link key={item.id} href={item.url} className=' font-bold hover:bg-secondery hover:text-white  md:hover:text-primary capitalize'>
          {item.name}
        </Navbar.Link>
    ))}
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarComponent
