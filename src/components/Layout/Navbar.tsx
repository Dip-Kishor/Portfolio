'use client'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service", href: "/service" },
    // { name: "Resume", href: "/resume" },
    { name: "Project", href: "/project" },
    // { name: "Contact", href: "/contact" },
  ]
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
      <div className={`z-50 w-full fixed lg:left-1/2 lg:transform lg:-translate-x-1/2 text-center transition-all duration-300 ease-in-out ${scrolled?"-top-5":"top-0"} `}>
      <div className={`z-50 relative font-bold  grid grid-cols-2 w-full max-lg:hidden transition-all duration-300 ease-in-out ${scrolled?"bg-black/70  pt-10 pb-6 px-10":" pt-10 pb-6 px-10"}`}>
        <div className='w-full text-3xl text-white'>Dip Kishor Regmi</div>
        <div className='w-full flex items-center'>
          <ul className='flex flex-wrap w-full justify-end gap-20 items-center'>
            {navLinks.map((navLink, index) => (
              <li key={index} className='text-[15px]'>
                <Link
                  href={navLink.href}
                  className={`${
                    pathname === navLink.href ? 'text-[#FF8132] font-bold underline' : 'text-white'
                  }`}
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex justify-between top-0 bg-black/50 text-white lg:hidden p-6'>
      <div>
        <span className="me-2">●</span>
        <span>Dip Kishor Regmi</span>
        <span className="ms-2">●</span>
      </div>
      <button
          className="lg:hidden"
          onClick={toggleNavbar}
          aria-label="Toggle Menu"
          type="button"
          >
          <FaBars className="text-[30px]" />
      </button>
      </div>
      <div
        className={`fixed inset-0 bg-white shadow-lg z-50 transition-transform duration-300 mb-100 ease-in-out px-3 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between border-b py-3">
          <button onClick={toggleNavbar} aria-label="Close Menu" type="button">
            <FaTimes className="text-2xl text-[#414347]" />
          </button>
        </div>
        <div className=''>
          <ul className='flex flex-col gap-3'>
            {navLinks.map((navLink,index)=>(
              <li className={`${
                pathname === navLink.href ? 'bg-[#FF8132] text-white font-bold' : 'text-black font-bold'
              }`} key={index}>
                <Link href={navLink.href}  onClick={() => setIsOpen(false)}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar