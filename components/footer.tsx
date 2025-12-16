"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2d5f2e] text-white">
      <div className="max-content px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-bold">F</span>
              </div>
              <div>
                <p className="text-sm font-semibold">Fadidia</p>
                <p className="text-xs opacity-80">Fruits & Légumes</p>
              </div>
            </div>
            <p className="text-sm opacity-80">Votre source de fraîcheur et de naturalité.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produits</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Fruits frais
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Légumes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Jus naturels
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Smoothies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Nos Coordonnées</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex gap-2">
                <span className="font-medium">Adresse:</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=9.634200,-13.601200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Lambandji, Carrefour Canadien
                </a>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Tél:</span>
                <a href="tel:+224620461512" className="hover:underline">+224 620 46 15 12</a>
              </li>
              <li className="flex gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:fadidiafruitsetlegumes@gmail.com" className="hover:underline break-all">
                  fadidiafruitsetlegumes@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fadidiafruits?igsh=MWMwM3IwcDJjMXFnNw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17fKjLcDyX/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@fadidia.fruits?_r=1&_t=ZM-92HL2OmqlrQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                {/* Simple TikTok SVG Icon for Footer */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 Fadidia Fruits & Légumes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
