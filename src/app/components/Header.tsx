'use client'

import { ComponentProps, PropsWithChildren, useEffect, useState } from "react"
import NextLink from 'next/link';
import { twMerge } from "tailwind-merge"
import { MdWhatsapp } from "react-icons/md"
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_LINK, WPP_LINK } from "../utils";
import { Logo } from "./Logo";

const Link = ({ children, ...props }: PropsWithChildren<ComponentProps<'a'>>) => {
  return (
    <li>
      <a className="text-2xl md:text-3xl text-sand lg:text-base hover:border-b border-sand" {...props}>{children}</a>
    </li>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  function toogleMenu() {
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
          <a href='#home' aria-label="Ir para a o topo da página">
            <Logo width={60} className="text-sand" />
          </a>

          <button className={twMerge("burger", isOpen && 'open', 'lg:hidden')} onClick={toogleMenu} aria-label="Menu" />

          <div className={twMerge(
            "absolute top-0 left-0 w-full h-screen bg-white z-50 translate-x-0",
            "flex flex-col items-center pt-28 transition-all ease-in-out duration-300",
            !isOpen && 'translate-x-full',
            'lg:relative lg:h-auto lg:bg-transparent lg:flex-row lg:p-0 lg:translate-x-0'
          )}>
            <ul className="text-center flex flex-col gap-8 lg:flex-row lg:flex-1 lg:justify-center lg:items-center lg:gap-16">
              <Link href='#temas' onClick={toogleMenu}>Temas abordados</Link>
              <Link href='#modalidades' onClick={toogleMenu}>Atendimento online</Link>
              <Link href='#como-comecar' onClick={toogleMenu}>Como começar?</Link>
              <Link href='#duvidas' onClick={toogleMenu}>Dúvidas</Link>
            </ul>

            <div className="flex text-sand mt-6 lg:mt-0 lg:gap-2">
              <NextLink href={WPP_LINK} target="_blank" className="p-2 lg:p-1" aria-label='Entre em contato via WhatsApp'>
                <MdWhatsapp size={28} />
              </NextLink>
              <NextLink href={INSTAGRAM_LINK} target="_blank" className="p-2 lg:p-1">
                <FiInstagram size={28} />
              </NextLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}