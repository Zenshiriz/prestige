import React from 'react'
import { Footer } from "flowbite-react";
import { navList } from '..';
import logo from "../assets/logo.png"

const FooterComponent = () => {
  return (
    <Footer container>
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <img src={logo} className=" pb-4  object-cover w-40 h-14" alt="Flowbite React Logo" />

        <Footer.LinkGroup className=' flex justify-center'>
        {navList.map((item)=>(
          <Footer.Link key={item.id} href={item.url} className=' font-boldhover hover:text-primary capitalize'>
          {item.name}
        </Footer.Link>
    ))}
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="prestige™" year={new Date().getFullYear()} />
    </div>
  </Footer>
  )
}

export default FooterComponent
