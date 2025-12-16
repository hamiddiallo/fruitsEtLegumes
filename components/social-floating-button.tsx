"use client"

import { useState } from "react"
import { MessageCircle, X, Facebook, Instagram, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialFloatingButton() {
    const [isOpen, setIsOpen] = useState(false)

    // Custom TikTok Icon
    const TikTokIcon = ({ size = 20 }: { size?: number }) => (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
    )

    const socialLinks = [
        {
            name: "WhatsApp",
            icon: <MessageCircle size={20} />,
            href: "https://wa.me/224620461512",
            color: "bg-[#25D366] hover:bg-[#20bd5a]",
        },
        {
            name: "TikTok",
            icon: <TikTokIcon size={20} />,
            href: "https://www.tiktok.com/@fadidia.fruits?_r=1&_t=ZM-92HL2OmqlrQ",
            color: "bg-[#000000] hover:bg-[#333333]",
        },
        {
            name: "Instagram",
            icon: <Instagram size={20} />,
            href: "https://www.instagram.com/fadidiafruits?igsh=MWMwM3IwcDJjMXFnNw%3D%3D&utm_source=qr",
            color: "bg-[#E1306C] hover:bg-[#c92b60]",
        },
        {
            name: "Facebook",
            icon: <Facebook size={20} />,
            href: "https://www.facebook.com/share/17fKjLcDyX/?mibextid=wwXIfr",
            color: "bg-[#1877F2] hover:bg-[#166fe5]",
        },
        {
            name: "Appeler",
            icon: <Phone size={20} />,
            href: "tel:+224620461512",
            color: "bg-green-600 hover:bg-green-700",
        },
        {
            name: "Email",
            icon: <Mail size={20} />,
            href: "mailto:fadidiafruitsetlegumes@gmail.com",
            color: "bg-orange-500 hover:bg-orange-600",
        },
    ]

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            {/* Social Menu */}
            <div
                className={`flex flex-col gap-3 transition-all duration-300 origin-bottom-right ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
                    }`}
            >
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-3 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 ${link.color}`}
                    >
                        <span className="text-sm font-medium">{link.name}</span>
                        {link.icon}
                    </a>
                ))}
            </div>

            {/* Main Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={`h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-gray-800 rotate-90" : "bg-green-600 hover:bg-green-700"
                    }`}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </Button>
        </div>
    )
}
