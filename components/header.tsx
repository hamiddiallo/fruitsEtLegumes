"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = [
  { label: "Épices", value: "epices" },
  { label: "Légumes", value: "legumes" },
  { label: "Fruits", value: "fruits" },
  { label: "Boissons", value: "boisson" },
  { label: "Commerce Général", value: "commerce_general" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  const navLinks = [
    { label: "Accueil", href: "#home" },
    { label: "Jus & Smoothies", href: "#juices" },
    { label: "À propos", href: "#about" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray">
      <div className="max-content px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-semibold text-green">Fadidia</h1>
            <p className="text-xs text-muted-foreground">Fruits & Légumes</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Accueil
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
              Produits <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem key={category.value} asChild>
                  <Link href={`/?category=${category.value}#products`} className="cursor-pointer">
                    {category.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden border-t border-gray bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="#home"
              className="block py-3 text-sm font-medium text-foreground hover:text-primary transition-colors border-b border-gray/50"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>

            <div className="border-b border-gray/50">
              <button
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Produits
                <ChevronDown size={16} className={`transition-transformDuration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {isMobileProductsOpen && (
                <div className="pl-4 pb-2 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.value}
                      href={`/?category=${category.value}#products`}
                      className="block py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (

              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
