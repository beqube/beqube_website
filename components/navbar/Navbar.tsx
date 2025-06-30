"use client"

import { useState, useEffect } from "react"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <DesktopNavbar isScrolled={isScrolled} />
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} isScrolled={isScrolled} />
    </>
  )
}

export default Navbar
