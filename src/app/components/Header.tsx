'use client'

import { PropsWithChildren, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { MdWhatsapp } from "react-icons/md"
import { FiInstagram } from "react-icons/fi";

const Link = ({ children }: PropsWithChildren) => {
  return <li className="text-3xl text-sand lg:text-base">{children}</li>
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleScroll() {
    setHasScrolled(window.scrollY > 0)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  }, []);

  return (
    <header className={twMerge("fixed w-full top-0 z-50 transition-all", hasScrolled ? "backdrop-blur-md bg-white/20 shadow-lg" : "bg-transparent")}>
      <div className="container">
        <nav className="flex justify-between items-center py-4">
          <div className="w-10 h-10 bg-slate-300 lg:mr-24"></div>
          <button className={twMerge("burger", isOpen && 'open', 'lg:hidden')} onClick={toggleMenu}></button>

          <ul className={twMerge(
            "absolute top-0 left-0 w-full h-screen bg-white z-50 translate-x-0",
            "flex flex-col items-center gap-10 pt-28 transition-all ease-in-out duration-300",
            !isOpen && 'translate-x-full',
            'lg:relative lg:h-auto lg:bg-transparent lg:flex-row lg:p-0 lg:translate-x-0 lg:justify-between'
          )}>
            <Link>Início</Link>
            <Link>Temas</Link>
            <Link>Modalidades</Link>
            <Link>Dúvidas</Link>

            <div className="flex border border-sand text-sand lg:border-0 lg:gap-4">
              <MdWhatsapp size={28} className="my-2 mx-6 lg:m-0" />
              <div className="h-full w-px bg-sand lg:hidden "></div>
              <FiInstagram size={28} className="my-2 mx-6 lg:m-0" />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  )
}