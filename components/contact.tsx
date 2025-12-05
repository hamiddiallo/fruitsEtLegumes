"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-content">
        <h2 className="text-center text-green mb-12">Contactez-nous</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-orange flex-shrink-0 mt-1" style={{ color: "#e8753f" }} />
              <div>
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <a href="https://wa.me/1234567890" className="text-foreground/70 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#e8753f" }} />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-foreground/70">
                  Conakry, Guinée 🇬🇳
                  <br />
                  Livraison disponible sur toute la ville
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#e8753f" }} />
              <div>
                <h3 className="font-semibold mb-1">Horaires</h3>
                <p className="text-foreground/70">
                  Lun - Sam: 08h00 - 19h00
                  <br />
                  Dimanche: 09h00 - 17h00
                </p>
              </div>
            </div>

            <div className="bg-green/10 rounded-2xl p-6 mt-8">
              <p className="text-sm text-foreground/70">
                <strong>Livraison disponible</strong> sur commande WhatsApp ou via le formulaire ci-contre.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-green/50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-green/50"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Votre téléphone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-green/50"
              />
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-green/50 resize-none"
                required
              ></textarea>
              <button type="submit" className="w-full btn-primary">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-light rounded-2xl overflow-hidden h-96">
          <img
            src="/google-map-location-fruits-vegetables-market.jpg"
            alt="Localisation Conakry, Guinée"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
