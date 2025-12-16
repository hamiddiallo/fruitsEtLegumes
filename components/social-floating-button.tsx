"use client"

import { useState } from "react"
import { MessageCircle, X, Facebook, Instagram, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialFloatingButton() {
    const [isOpen, setIsOpen] = useState(false)

    const socialLinks = [
        {
            name: "WhatsApp",
            icon: <MessageCircle size={20} />,
            href: "https://wa.me/224000000000", // Replace with actual number
            color: "bg-[#25D366] hover:bg-[#20bd5a]",
        },
        {
            name: "Instagram",
            icon: <Instagram size={20} />,
            href: "https://instagram.com",
            color: "bg-[#E1306C] hover:bg-[#c92b60]",
        },
        {
            name: "Facebook",
            icon: <Facebook size={20} />,
            href: "https://facebook.com",
            color: "bg-[#1877F2] hover:bg-[#166fe5]",
        },
        {
            name: "Appeler",
            icon: <Phone size={20} />,
            href: "tel:+224000000000",
            color: "bg-green-600 hover:bg-green-700",
        },
        {
            name: "Email",
            icon: <Mail size={20} />,
            href: "mailto:contact@fadidia.com",
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
