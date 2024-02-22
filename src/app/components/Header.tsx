'use client'

import { PropsWithChildren, useEffect, useState } from "react"
import NextLink, { LinkProps } from 'next/link';
import { twMerge } from "tailwind-merge"
import { MdWhatsapp } from "react-icons/md"
import { FiInstagram } from "react-icons/fi";
import { INSTAGRAM_LINK, WPP_LINK } from "../utils";
import { Logo } from "./Logo";

const Link = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <li>
      <NextLink className="text-3xl text-sand lg:text-base hover:border-b border-sand" {...props}>{children}</NextLink>
    </li>
  )
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
          <Logo width={60} className="text-sand" />

          <button className={twMerge("burger", isOpen && 'open', 'lg:hidden')} onClick={toggleMenu}></button>

          <div className={twMerge(
            "absolute top-0 left-0 w-full h-screen bg-white z-50 translate-x-0",
            "flex flex-col items-center pt-28 transition-all ease-in-out duration-300",
            !isOpen && 'translate-x-full',
            'lg:relative lg:h-auto lg:bg-transparent lg:flex-row lg:p-0 lg:translate-x-0'
          )}>
            <ul className="text-center flex flex-col gap-8 lg:flex-row lg:flex-1 lg:justify-center lg:gap-16">
              <Link href='#home'>Início</Link>
              <Link href='#temas'>Temas</Link>
              <Link href='#modalidades'>Modalidades</Link>
              <Link href='#duvidas'>Dúvidas</Link>
            </ul>

            <div className="flex text-sand mt-6 lg:mt-0 lg:gap-2">
              <NextLink href={WPP_LINK} target="_blank" className="p-2 lg:p-1">
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